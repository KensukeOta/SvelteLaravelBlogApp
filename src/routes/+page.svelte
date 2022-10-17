<script lang="ts">
  import { page } from "$app/stores";
	import PostLinkButton from "$lib/components/atoms/PostLinkButton.svelte";
	import PostItem from "$lib/components/organisms/PostItem.svelte";
</script>

<svelte:head>
  <title>SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">トップページ</h1>

<p>Welcome! {$page.data.user.name ? $page.data.user.name : "stranger"}</p>

<nav class="text-center">
  <PostLinkButton />
</nav>

<main>
  <PostItem />
</main>