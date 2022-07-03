<script lang="ts">
  export let disabled: boolean;
</script>

<button type="submit" disabled={disabled} class="border">
  <slot></slot>
</button>