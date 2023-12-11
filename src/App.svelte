<script lang="ts">
  import Landing from "./components/Landing.svelte";
  import Weather from "./components/weather/Weather.svelte";
  import Loading from "./components/Loading.svelte";
  import { weatherService } from "./stores/weather";
  import Fade from "./components/Fade.svelte";
  import "./style/global.scss";
</script>

<main class="container">
  <Landing />
  {#if $weatherService.loading}
    <Loading />
  {:else}
    <Fade>
      <Weather />
    </Fade>
  {/if}
</main>

<style lang="scss">
  .container {
    display: flex;
  }

  @media (max-width: 978px) {
    .container {
      flex-direction: column;
    }
  }
</style>
