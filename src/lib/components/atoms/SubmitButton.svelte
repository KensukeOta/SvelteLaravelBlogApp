<script lang="ts">
  export let disabled: boolean;
  export let className: string = "";
</script>

<button type="submit" disabled={disabled} class={`border bg-red-400 rounded-3xl w-1/3 text-white py-2 mt-2 hover:bg-red-300 ${className}`}>
  <slot></slot>
</button>