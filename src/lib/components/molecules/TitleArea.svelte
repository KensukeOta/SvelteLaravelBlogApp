<script lang="ts">
	import Label from "../atoms/Label.svelte";
	import TitleInput from "../atoms/TitleInput.svelte";

	export let title: any;
</script>

<Label For="title">
  タイトル
</Label>

<TitleInput title={title} />