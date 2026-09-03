import './CityTitle.scss';
import cn from "classnames";

type Props = {
  cityName: string;
  currentCityTemp: number;
  isLoading: boolean;
  isError: boolean;
};

export const CityTitle = ({
  cityName,
  currentCityTemp,
  isLoading,
  isError,
}: Props) => {
  return (
    <>
      {!isError && !isLoading && cityName ? (
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
