<script lang="ts">
  export let temperature: number | undefined = undefined;
  export let metric: string | undefined = undefined;

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
</script>

<div class="temperature-container">
  <div class="temperature">{getTemperature(temperature, metric)}</div>
  <div class="temperature-information">
    <p>Its currently around ~{temperature} in the netherlands</p>
    <p>
      Very sunny, and very unsual for in the Netherlands. But we should enjoy it
      as long as it lasts.
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

    .temperature {
      @include text-style("heading-2");
    }

    .temperature-information {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p:nth-of-type(1) {
        @include text-style("body-2");
      }
      p:nth-of-type(2) {
        @include text-style("body-1");
      }
    }
  }
</style>
