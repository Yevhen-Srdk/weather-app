import { useDispatch, useSelector } from "react-redux";
import { useGetForecastQuery } from "./store/weatherApi";
import { ErrorMsg } from "./components/ErrorMsg/ErrorMsg";
import { WeatherContainer } from "./components/WeatherContainer/WeatherContainer";
import { Search } from "./components/Search/Search";
import { CityTitle } from "./components/CityTitle/CityTitle";
import type { RootState } from "./store/store";
import "./App.scss";
import { Loader } from "./components/Loader/Loader";
import { useEffect } from "react";
import { setActiveCard } from "./store/activeCardSlice";

function App() {
  const cityQuery = useSelector((state: RootState) => state.cityQuery);
  const { data, isError, isLoading } = useGetForecastQuery(cityQuery, {
    skip: !cityQuery,
  });
  const cityName = data?.[0]?.city ? data[0].city : "";
  const currentCityTemp = data?.[0]?.temperature
    ? Math.round(data[0].temperature)
    : 0;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setActiveCard(data[0].date))
    } 
  }, [dispatch, data])

  return (
    <section className="container">
      <CityTitle
        cityName={cityName}
        cityQuery={cityQuery}
        currentCityTemp={currentCityTemp}
        isError={isError}
        isLoading={isLoading}
      />
      <Search />
      {isError && !isLoading && <ErrorMsg />}
      {isLoading && <Loader />}
      {cityQuery && !isError && !isLoading && <WeatherContainer data={data} />}
    </section>
  );
}

export default App;
