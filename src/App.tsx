import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import type { RootState } from "./store/store";
import { debounce } from "./utility/debounce";
import { setCity } from "./store/citySlice";
import { useGetForecastQuery } from "./store/weatherApi";
import { useEffect, useMemo } from "react";
import { ErrorMsg } from "./components/ErrorMsg/ErrorMsg";
import { formatDate } from "./utility/formatDate";
import { daysOfWeek } from "./types/daysOfWeek";
import cn from "classnames";

function App() {
  const cityQuery = useSelector((state: RootState) => state.city.query);
  const cityName = useSelector((state: RootState) => state.city.name);
  const { data, isError, isLoading } = useGetForecastQuery(cityQuery, {
    skip: !cityQuery,
  });
  const dispatch = useDispatch();

  const debouncedCityQuery = useMemo(() => {
    return debounce((city: string) => {
      dispatch(setCity(city));
    }, 500);
  }, [dispatch]);

  useEffect(() => {
    if (data?.[0]?.city) {
      dispatch(setCity(data[0].city));
    }
  }, [data, dispatch]);

  return (
    <section className="container">
      {!isError && !isLoading && cityName ? (
        <h1 className="city">
          in {cityName} now {Math.round(data?.[0]?.temperature || 0)}°C
        </h1>
      ) : (
        <h1>Hello!</h1>
      )}
      <div className="search">
        <label htmlFor="city">Enter your city</label>
        <input
          className="searchInput"
          id="city"
          type="text"
          onChange={(e) => debouncedCityQuery(e.target.value)}
          placeholder="Enter your city"
        />
      </div>
      {isError && !isLoading && <ErrorMsg />}
      {cityName && !isError && !isLoading && (
        <div className="weatherContainer">
          {data?.map((forecast) => {
            const { day, month } = formatDate(forecast.date);
            const dayOfWeek = daysOfWeek.get(new Date(forecast.date).getDay());

            return (
              <div key={forecast.date} className="weatherCard">
                <p>{dayOfWeek}</p>
                <h2
                  className={cn("numberOfDay", {
                    weekend: dayOfWeek === "Saturday" || dayOfWeek === "Sunday",
                  })}
                >
                  {day}
                </h2>
                <p>{month}</p>
                <img src={forecast.icon} alt={forecast.alt} />
                <div className="tempRange">
                  <p>Max: {Math.round(forecast.maxTemp)}°</p>
                  <p>Min: {Math.round(forecast.minTemp)}°</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
