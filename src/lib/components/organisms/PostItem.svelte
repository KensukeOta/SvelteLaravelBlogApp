<script lang="ts">
	import type { Post } from "$lib/types/Post";
  import { page } from "$app/stores";
  import EditLinkButton from "../atoms/EditLinkButton.svelte";
	import PostDeleteButton from "../atoms/PostDeleteButton.svelte";

  export let post: Post
</script>

<article class="border p-2">
  <a href={`${post.user.name}/posts/${post.id}`}><h1 class="font-bold">{post.title}</h1></a>
  <nav class="flex justify-between">
    by {post.user.name}
    {#if $page.data.user.name && $page.data.user.id === post.user_id}
      <EditLinkButton post={post} />
      <PostDeleteButton post={post} />
    {/if}
  </nav>
</article>