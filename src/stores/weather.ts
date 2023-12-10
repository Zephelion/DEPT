import { writable } from "svelte/store";
import type { Weather } from "../types/data.types";

export interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: boolean;
}

const createWeather = () => {
  const store = writable<WeatherState>();
  const { subscribe, set } = store;

  const getWeather = async () => {
    set({
      weather: null,
      loading: true,
      error: false,
    });

    try {
      const url =
        "https://dtnl-frontend-internship-case.vercel.app/api/get-weather";
      const response = await fetch(url);
      const data = await response.json();
      set({
        weather: data,
        loading: false,
        error: false,
      });
    } catch (error) {
      set({
        weather: null,
        loading: false,
        error: true,
      });
    }
  };

  getWeather();

  return {
    getWeather,
    subscribe,
    set,
  };
};

export const weatherService = createWeather();
