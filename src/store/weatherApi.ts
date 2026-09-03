import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Forecast } from "../types/Forecast";
import type { ForecastApiResponse } from "../types/ForecastApiResponse";

const API_KEY = "a760be097d1d45529ad155757262708";
const BASE_URL = "https://api.weatherapi.com/v1/";

export const weatherApi = createApi({
  reducerPath: "forecast",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getForecast: builder.query<Forecast, string>({
      query: (city) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`,

      transformResponse: (response: ForecastApiResponse) => {
        return response.forecast.forecastday.map((day) => {
          return {
            city: response.location.name,
            date: day.date,
            temperature: response.current.temp_c,
            minTemp: day.day.mintemp_c,
            maxTemp: day.day.maxtemp_c,
            feelsLike: response.current.feelslike_c,
            icon: day.day.condition.icon,
            alt: day.day.condition.text,
          };
        });
      },
    }),
  }),
});

export const { useGetForecastQuery } = weatherApi;
