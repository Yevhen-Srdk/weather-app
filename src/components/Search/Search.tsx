import { useDispatch } from "react-redux";
import { debounce } from "../../utility/debounce";
import { useMemo } from "react";
import { setCityQuery } from "../../store/cityQuerySlice";
import './Search.scss';

export const Search = () => {
  const dispatch = useDispatch();

  const debouncedCityQuery = useMemo(() => {
    return debounce((city: string) => {
      dispatch(setCityQuery(city));
    }, 500);
  }, [dispatch]);

  return (
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
  );
};
