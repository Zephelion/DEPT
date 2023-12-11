<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div class="fade" transition:fade>
  <slot />
</div>
