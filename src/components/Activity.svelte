<script lang="ts">
  import type { Activity } from "../types/data.types";
  import fallBackImage from "../assets/images/fallback.webp";

  export let activity: Activity | undefined = undefined;
</script>

<div class="activity-container">
  <div class="img-container">
    <img
      src={activity?.imageUrl &&
      activity?.imageUrl !== "/activity-images/markthal.png" &&
      activity?.imageUrl !== "6" &&
      activity?.imageUrl !== "/activity-images/royal-palace-amsterdam.png"
        ? activity.imageUrl
        : fallBackImage}
      alt={activity?.title}
    />
  </div>
  <div class="information">
    <h3>{activity?.title}</h3>
    <p>{activity?.description}</p>
  </div>
</div>

<style lang="scss">
  @import "../style/helpers.scss";

  .activity-container {
    display: flex;
    gap: 2rem;
    padding: 1rem;

    .img-container {
      width: 6.8125rem;
      height: 6.8125rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .information {
      width: 19rem;
      h3 {
        @include text-style("body-2");
        font-size: 1rem;
      }

      p {
        @include text-style("body-1");
        font-size: 0.875rem;
      }
    }
  }

  @media (max-width: 978px) {
    .activity-container {
      flex-direction: column;

      .img-container {
        width: 100%;
        height: 13rem;
      }

      .information {
        width: 100%;

        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
