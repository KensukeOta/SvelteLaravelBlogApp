<script lang="ts">
  import Label from "../atoms/Label.svelte";
  import NameInput from "../atoms/NameInput.svelte";

  export let name: any
</script>

<Label For="name">名前</Label>
<NameInput name={name} />