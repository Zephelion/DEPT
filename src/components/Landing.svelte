<script lang="ts">
  import DeptLogo from "../assets/dept.svg";
</script>

<section class="landing">
  <div class="logo">
    <img src={DeptLogo} alt="" />
  </div>
  <div class="heading">
    <h1 class="heading-text">DEPT® weather planner</h1>
  </div>
  <div class="body">
    <p class="body-text">
      Picture this: an application that doesn't just tell you the weather, but
      also helps you plan your activities around it. Imagine knowing exactly the
      perfect day to plan that hike, or when to avoid the outdoor concert due to
      an unexpected shower. That's exactly what the Dept Weather Planner offers
      you.
    </p>
    <p class="body-text">
      Built with cutting-edge technologies, our weather planner brings you
      accurate, real-time weather data with a slick and user-friendly interface.
      But it's not just a weather app; it's an intuitive daily planner that
      syncs with the weather. With a range of activities to choose from, it
      suggests the best options based on current and forecasted weather
      conditions.
    </p>
  </div>
</section>

<style lang="scss">
  @import "../style/helpers.scss";

  .landing {
    background-color: $purple;
    padding: 2rem 8rem 7rem 12rem;
  }

  .logo {
    max-width: fit-content;
    margin-bottom: 3rem;
  }

  .heading-text {
    @include text-style("heading-1");
    color: white;
  }

  .heading {
    width: 37rem;
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 37rem;
  }

  .body-text {
    @include text-style("body-1");
    color: white;
  }
</style>
