<script lang="ts">
  import Temperature from "./Temperature.svelte";
  import Activity from "../Activity.svelte";
  import { weatherService } from "../../stores/weather";
  import { activitiesService } from "../../stores/activities";
  import type { Activity as ActivityType } from "../../types/data.types";

  $: weather = $weatherService.weather;

  const isWithinRange = (activity: ActivityType) => {
    if (weather !== null) {
      const { temperature } = weather;
      const { minTemp, maxTemp } = activity;

      if (
        (minTemp !== null &&
          maxTemp !== null &&
          temperature !== undefined &&
          temperature.temp >= minTemp &&
          temperature.temp <= maxTemp) ||
        (minTemp === null &&
          maxTemp !== null &&
          temperature !== undefined &&
          temperature.temp <= maxTemp) ||
        (minTemp !== null &&
          maxTemp === null &&
          temperature !== undefined &&
          temperature.temp >= minTemp)
      ) {
        return true;
      }
    }

    return false;
  };
</script>

<section class="container">
  {#if weather}
    <Temperature
      temperature={weather.temperature.temp}
      metric={weather.temperature.metric}
      weatherInfo={weather.weatherInfo}
    />
    {#if $activitiesService.activities !== null}
      <h2 class="heading">Somethings you could do:</h2>
      {#each $activitiesService.activities as activity}
        {#if isWithinRange(activity)}
          <Activity {activity} />
        {/if}
      {/each}

      <h2 class="heading">Somethings you should not do:</h2>
      {#each $activitiesService.activities as activity}
        {#if !isWithinRange(activity)}
          <Activity {activity} />
        {/if}
      {/each}
    {/if}
  {/if}
</section>

<style lang="scss">
  @import "../../style/helpers.scss";
  .container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .heading {
    @include text-style("heading-2");
    font-size: 1.25rem;
  }

  @media (max-width: 978px) {
    .heading {
      font-size: 2rem;
    }
  }
</style>
