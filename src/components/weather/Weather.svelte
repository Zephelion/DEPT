<script lang="ts">
  import Temperature from "./Temperature.svelte";
  import Activity from "../Activity.svelte";
  import { weatherService } from "../../stores/weather";
  import { activitiesService } from "../../stores/activities";

  $: weather = $weatherService.weather;

  console.log(weather);
</script>

<section class="container">
  {#if weather}
    <Temperature
      temperature={weather.temperature.temp}
      metric={weather.temperature.metric}
    />
    {#if $activitiesService.activities !== null}
      {#each $activitiesService.activities as activity}
        <Activity {activity} />
      {/each}
    {/if}
  {/if}
</section>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
</style>
