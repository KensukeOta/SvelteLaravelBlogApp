<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { page } from "$app/stores"
	import { enhance } from "$app/forms";
	import UserIdInput from "$lib/components/atoms/UserIdInput.svelte";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";

  export let form: ActionData;
  export let data: PageData;
</script>

<svelte:head>
  <title>記事更新フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事更新フォーム</h1>

<form method="POST" use:enhance>
  {#if form?.errors}
    <p class="text-red-500">{form.errors}</p>
  {/if}
  <TitleArea title={data.post.title || form?.title} />
  <PostArea body={data.post.body || form?.body} />
  <UserIdInput id={$page.data.user.id} />
  <button type="submit">更新する</button>
</form>