import "./AdditionalInfo.scss";
import cn from "classnames";

type Props = {
  hours:
    | {
        temp_c: number;
        temp_f: number;
        wind_kph: number;
        time: string;
        humidity: number;
        feelslike_c: number;
        feelslike_f: number;
        chance_of_rain: number;
        chance_of_snow: number;

        condition: {
          text: string;
          icon: string;
        };
      }[]
    | undefined;

  localTime: string | undefined;
};

export const AdditionalInfo = ({ hours, localTime }: Props) => {
  const time = localTime?.slice(-5); // time template is like "year-month-day 00:00",

  return (
    <section className="additionalInfo">
      <h3 className="title">Additional weather information</h3>

      <div className="labels">
        <div className="localTime">
          <span className="smallTxt timeSpan">local time</span>
          <h3 className="time">{time}</h3>
        </div>
        <p className={cn("smallTxt boldTxt")}>Temperature</p>
        <p className={cn("smallTxt boldTxt")}>Feels like</p>
        <p className={cn("smallTxt boldTxt")}>Humidity</p>
        <p className={cn("smallTxt boldTxt")}>Wind, kph</p>
        <p className={cn("smallTxt boldTxt")}>Chance of rain</p>
        <p className={cn("smallTxt boldTxt")}>Chance of snow</p>
      </div>

      <div className="info">
        {hours?.map((hour) => {
          const windSpeed = Math.round(hour.wind_kph);
          const hourTemp = Math.round(hour.temp_c);
          const feelsLike = Math.round(hour.feelslike_c);
          const hourTime = hour.time.slice(-5); // time template is like "year-month-day 00:00",

          return (
            <div className="card" key={hour.time}>
              <p className={cn("smallTxt boldTxt")}>{hourTime}</p>
              <img
                className="cardImg"
                src={hour.condition.icon}
                alt={hour.condition.text}
              />
              <div className="cardBody">
                <p
                  className={cn("smallTxt", {
                    warm: hourTemp > 0,
                    cold: hourTemp < 0,
                  })}
                >
                  {hourTemp}°
                </p>
                <p
                  className={cn("smallTxt", {
                    warm: hourTemp > 0,
                    cold: hourTemp < 0,
                  })}
                >
                  {feelsLike}°
                </p>
                <p className={cn("smallTxt")}>{hour.humidity}%</p>
                <p className={cn("smallTxt")}>{windSpeed}</p>
                <p className={cn("smallTxt")}>{hour.chance_of_rain}%</p>
                <p className={cn("smallTxt")}>{hour.chance_of_snow}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
