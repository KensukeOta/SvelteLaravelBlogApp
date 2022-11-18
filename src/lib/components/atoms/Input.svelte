<script lang="ts">
  export let type: string;
  export let name: string;
  export let id: string;
  export let value: string | number;
  export let placeholder: string;
  export let className: string;
</script>

<input type={type} name={name} id={id} value={value} placeholder={placeholder} class={className} />