export type Weather = {
  city: string;
  localTime: string;
  date: string;
  temperature: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  icon: string;
  alt: string;
  hours: {
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
};
