import { Loader } from '../Loader/Loader';
import './CityTitle.scss';
import cn from "classnames";

type Props = {
  cityName: string;
  cityQuery: string;
  currentCityTemp: number;
  isLoading: boolean;
  isError: boolean;
};

export const CityTitle = ({
  cityName,
  cityQuery,
  currentCityTemp,
  isLoading,
  isError,
}: Props) => {
  return (
    <>
    {isLoading && <Loader />}
      {!isError && !isLoading && cityQuery ? (
        <h1 className="cityTitle">
          In <span className="city">{cityName}</span> now{" "}
          <span
            className={cn({
              warm: currentCityTemp > 0,
              cold: currentCityTemp < 0,
            })}
          >
            {currentCityTemp}
          </span>
          °C
        </h1>
      ) : (
        <h1>Hello!</h1>
      )}
    </>
  );
};
