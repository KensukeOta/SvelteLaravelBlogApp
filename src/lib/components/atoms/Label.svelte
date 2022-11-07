<script lang="ts">
  import { page } from "$app/stores";
  import RequiredText from "./RequiredText.svelte";
  
  export let For: string;
</script>

<label for={For} class="block mt-2">
  <slot></slot> {#if $page.url.pathname === "/signup"}<RequiredText />{/if}
</label>