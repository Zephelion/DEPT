<script lang="ts">
  export let type: string = "text";
  export let name: string = "";
  export let id: string = "";
  export let placeholder: string = "";
</script>

<input {type} {name} {id} {placeholder} />

<style lang="scss">
  @import "../style/helpers.scss";

  input {
    @include text-style("body-2");
    background-color: transparent;
    outline: none;
    border: 1px solid black;
    font-size: 0.875rem;
    border-radius: 2rem;
    padding: 0.5rem;

    &::placeholder {
      text-align: center;
    }
  }
</style>
