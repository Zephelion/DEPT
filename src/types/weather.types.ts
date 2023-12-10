export type Temperature = {
  metric: string;
  temp: number;
};

export type WeatherInfo = {
  description: string;
  minTemp: number | null;
  maxTemp: number | null;
  title: string;
};
