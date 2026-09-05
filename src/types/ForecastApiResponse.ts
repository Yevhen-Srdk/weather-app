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
        maxtemp_f: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
        };
      };

      hour: {
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
      }[];
    }[];
  };
};
