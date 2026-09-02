export type ForecastApiResponse = {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };

  current: {
    last_updated: string;
    temp_c: number;
    is_day: boolean;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    cloud: number;
    feelslike_c: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
  };

  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
};
