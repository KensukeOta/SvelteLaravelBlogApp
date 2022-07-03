<script lang="ts">
  export let For: string;
</script>

<label for={For}>
  <slot></slot>
</label>