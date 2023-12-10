<script lang="ts">
  import Landing from "./components/Landing.svelte";
  import Weather from "./components/weather/Weather.svelte";
  import "./style/global.scss";
</script>

<main class="container">
  <Landing />
  <Weather />
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
