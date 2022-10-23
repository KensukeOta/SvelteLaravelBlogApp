<script lang="ts">
	import type { PageData } from "./$types";
  import { page } from "$app/stores";
	import PostLinkButton from "$lib/components/atoms/PostLinkButton.svelte";
	import PostItem from "$lib/components/organisms/PostItem.svelte";
  import PaginationLinkButton from "$lib/components/organisms/PaginationLinkButton.svelte";

  export let data: PageData;
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
  {#each data.posts.data as post (post.id)}
    <PostItem post={post} />
  {:else}
    <p class="font-bold text-center p-2">記事が投稿されていません</p>
  {/each}
</main>

<nav class="text-center fixed left-0 right-0 bottom-16">
  <PaginationLinkButton posts={data.posts} />
</nav>