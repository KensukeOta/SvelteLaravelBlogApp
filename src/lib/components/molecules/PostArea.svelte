<script lang="ts">
	import Label from "../atoms/Label.svelte";
	import PostInput from "../atoms/PostInput.svelte";

	export let body: any;
</script>

<Label For="body">
  本文
</Label>

<PostInput body={body} />