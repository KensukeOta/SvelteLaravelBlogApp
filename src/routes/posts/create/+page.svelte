<script lang="ts">
	import type { ActionData } from "./$types";
  import { page } from "$app/stores"
	import { enhance } from "$app/forms";
	import UserIdInput from "$lib/components/atoms/UserIdInput.svelte";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";

  export let form: ActionData;
</script>

<svelte:head>
  <title>記事投稿フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事投稿フォーム</h1>

<form method="POST" use:enhance>
  {#if form?.errors}
    <p class="text-red-500">{form.errors}</p>
  {/if}
  <TitleArea title={form?.title ?? ""} />
  <PostArea body={form?.body ?? ""} />
  <UserIdInput id={$page.data.user.id} />
  <button type="submit">投稿する</button>
</form>