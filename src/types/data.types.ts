import type { Temperature } from "./weather.types";
import type { WeatherInfo } from "./weather.types";

export type Weather = {
  temperature: Temperature;
  weatherInfo: WeatherInfo[];
};

export type Activity = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  minTemp: number | null;
  maxTemp: number | null;
};
