import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Forecast } from "../types/Forecast";
import type { ForecastApiResponse } from "../types/ForecastApiResponse";
import { NUMBER_OF_FORECAST_DAY } from "../types/Constants";
import type { Weather } from "../types/Weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1/";

export const weatherApi = createApi({
  reducerPath: "forecast",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getForecast: builder.query<Forecast, string>({
      query: (city) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=${NUMBER_OF_FORECAST_DAY}&aqi=no&alerts=no`,

      transformResponse: (response: ForecastApiResponse) => {
        return response.forecast.forecastday.map((day): Weather => {
          return {
            city: response.location.name,
            localTime: response.location.localtime,
            date: day.date,
            temperature: response.current.temp_c,
            minTemp: day.day.mintemp_c,
            maxTemp: day.day.maxtemp_c,
            feelsLike: response.current.feelslike_c,
            icon: day.day.condition.icon,
            alt: day.day.condition.text,
            hours: day.hour,
          };
        });
      },
    }),
  }),
});

export const { useGetForecastQuery } = weatherApi;
