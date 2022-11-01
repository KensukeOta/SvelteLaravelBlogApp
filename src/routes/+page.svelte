<script lang="ts">
	import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import { searchKeyword } from "$lib/stores/searchKeyword";
  import { filteredPosts } from "$lib/utils/searchFunction";
	import PostLinkButton from "$lib/components/atoms/PostLinkButton.svelte";
	import PostItem from "$lib/components/organisms/PostItem.svelte";

  export let data: PageData;

  let currentPage = 1;
  let pageSize = 5;
  $: items = filteredPosts($searchKeyword, data);
  $: paginatedItems = paginate({items, pageSize, currentPage})
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
  {#each paginatedItems as post, idx (post.id)}
    <PostItem post={post} />
  {:else}
    <p class="font-bold text-center p-2">記事が投稿されていません</p>
  {/each}
</main>

<nav class="text-center fixed left-0 right-0 bottom-12">
  <LightPaginationNav
    totalItems={items.length}
    pageSize={pageSize}
    currentPage={currentPage}
    limit={1}
    showStepOptions={true}
    on:setPage={(e) => currentPage = e.detail.page}
  />
</nav>