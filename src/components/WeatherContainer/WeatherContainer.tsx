import type { Forecast } from "../../types/Forecast";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";
import { WeatherItem } from "../WeatherItem/WeatherItem";
import "./WeatherContainer.scss";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

type Props = {
  data: Forecast | undefined;
};

export const WeatherContainer = ({ data }: Props) => {
  const activeCardDate = useSelector((state: RootState) => state.activeCard);
  const activeCard = data?.find((day) => day.date === activeCardDate);

  return (
    <div className="weatherContainer">
      <div className="forecastContainer">
        {data?.map((forecast) => {
          return <WeatherItem key={forecast.date} forecast={forecast} />;
        })}
      </div>

      <AdditionalInfo
        hours={activeCard?.hours}
        localTime={data?.[0].localTime}
      />
    </div>
  );
};
