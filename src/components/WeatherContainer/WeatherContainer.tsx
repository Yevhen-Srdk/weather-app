import type { Forecast } from "../../types/Forecast";
import { WeatherItem } from "../WeatherItem/WeatherItem";
import './WeatherContainer.scss';

type Props = {
    data: Forecast | undefined,
}

export const WeatherContainer = ({ data }: Props) => {
  return (
    <div className="weatherContainer">
      {data?.map((forecast) => {
        return (
          <WeatherItem key={forecast.date} forecast={forecast} />
        );
      })}
    </div>
  );
};
