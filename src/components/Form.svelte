<script lang="ts">
  import SubmitButton from "./SubmitButton.svelte";
  import Input from "./Input.svelte";
</script>

<section class="form-container">
  <div class="form">
    <h3 class="heading">Want to get a daily forecast?</h3>
    <form method="POST">
      <label for="email">Email</label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      <SubmitButton />
    </form>
  </div>
</section>

<style lang="scss">
  @import "../style/helpers.scss";

  .form-container {
    background-color: $grey-100;
    padding-left: 12rem;
    padding-bottom: 2rem;
  }

  .heading {
    @include text-style("heading-2");
    font-size: 1.25rem;
  }

  label {
    display: none;
  }

  @media (max-width: 978px) {
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-container {
      padding: 2rem;
    }
    .form {
      display: flex;
      flex-direction: column;
      padding-left: 0rem;
    }
  }
</style>
