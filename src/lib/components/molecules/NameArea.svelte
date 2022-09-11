<script lang="ts">
  import Label from "../atoms/Label.svelte";
  import NameInput from "../atoms/NameInput.svelte";

  export let name: any
</script>

<dt>
  <Label For="name">名前</Label>
</dt>
<dd>
  <NameInput name={name} />
</dd>