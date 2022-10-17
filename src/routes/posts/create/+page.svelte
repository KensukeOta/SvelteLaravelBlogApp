<script lang="ts">
  import { page } from "$app/stores"
	import UserIdInput from "$lib/components/atoms/UserIdInput.svelte";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";
</script>

<svelte:head>
  <title>記事投稿フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事投稿フォーム</h1>

<form method="POST">
  <TitleArea />
  <PostArea />
  <UserIdInput id={$page.data.user.id} />
  <button type="submit">投稿する</button>
</form>