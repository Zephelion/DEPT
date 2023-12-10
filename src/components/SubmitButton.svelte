<script lang="ts">
  console.log("Hello world!");
</script>

<button class="submit" type="submit">Submit</button>

<style lang="scss">
  @import "../style/helpers.scss";

  .submit {
    @include text-style("body-2");
    background-color: $black;
    color: $grey-50;
    outline: none;
    border: 1px solid black;
    font-size: 0.875rem;
    border-radius: 2rem;
    padding: 0.5rem;
    width: 6rem;
    cursor: pointer;
  }

  @media (max-width: 978px) {
    .submit {
      width: 100%;
    }
  }
</style>
