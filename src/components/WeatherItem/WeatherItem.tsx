import cn from "classnames";
import './WeatherItem.scss';
import type { Weather } from "../../types/Weather";
import { formatDate } from "../../utility/formatDate";
import { DaysOfWeek } from "../../types/DaysOfWeek";

type Props = {
    forecast: Weather;
}

export const WeatherItem = ({ forecast }: Props) => {
  const { day, month } = formatDate(forecast.date);
  const dayOfWeek = DaysOfWeek.get(new Date(forecast.date).getDay());
  const maxTemp = Math.round(forecast.maxTemp);
  const minTemp = Math.round(forecast.minTemp);

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
        <div className="tempInfo">
          <span>max</span>
          <p
            className={cn("temp", {
              warm: maxTemp > 0,
              cold: maxTemp < 0,
            })}
          >
            {maxTemp}°
          </p>
        </div>

        <div className="tempInfo">
          <span>min</span>
          <p
            className={cn("temp", {
              warm: minTemp > 0,
              cold: minTemp < 0,
            })}
          >
            {minTemp}°
          </p>
        </div>
      </div>
    </div>
  );
};
