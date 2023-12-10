<script lang="ts">
  import type { WeatherInfo } from "../../types/weather.types";

  export let temperature: number | undefined = undefined;
  export let metric: string | undefined = undefined;
  export let weatherInfo: WeatherInfo[] | undefined = undefined;

  const symbol = {
    celsius: "°C",
    fahrenheit: "°F",
  };

  const getTemperature = (
    temperature: number | undefined,
    metric: string | undefined
  ) => {
    if (metric === "CELCIUS") {
      return `${temperature}${symbol.celsius}`;
    } else if (metric === "FAHRENHEIT") {
      return `${temperature}${symbol.fahrenheit}`;
    } else {
      return `${temperature}`;
    }
  };

  const getInfo = (temperature: number | undefined) => {
    if (weatherInfo !== undefined) {
      for (const currentInfo of weatherInfo) {
        const { minTemp, maxTemp, title } = currentInfo;

        if (
          (minTemp !== null &&
            maxTemp !== null &&
            temperature !== undefined &&
            temperature >= minTemp &&
            temperature <= maxTemp) ||
          (minTemp === null &&
            maxTemp !== null &&
            temperature !== undefined &&
            temperature <= maxTemp) ||
          (minTemp !== null &&
            maxTemp === null &&
            temperature !== undefined &&
            temperature >= minTemp)
        ) {
          return title.replace(/{{ CELCIUS }}/g, `${temperature}`);
        }
      }
    }
  };
</script>

<div class="temperature-container">
  <div class="temperature">{getTemperature(temperature, metric)}</div>
  <div class="temperature-information">
    <p>Its currently around ~{temperature} in the netherlands</p>
    <p>
      {getInfo(temperature)}
    </p>
  </div>
</div>

<style lang="scss">
  @import "../../style/helpers.scss";

  .temperature-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background-color: $rose;
    border-radius: 6px;
    flex-wrap: wrap;

    .temperature {
      @include text-style("heading-2");
    }

    .temperature-information {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p:nth-of-type(1) {
        @include text-style("body-2");
        font-size: 1.35rem;
      }
      p:nth-of-type(2) {
        @include text-style("body-1");
      }
    }
  }
</style>
