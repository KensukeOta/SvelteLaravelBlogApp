<script lang="ts">
	import type { Post } from "$lib/types/Post";

  export let post: Post
</script>

<article class="border p-2">
  <a href={`${post.user.name}/posts/${post.id}`}><h1 class="font-bold">{post.title}</h1></a>
  <nav class="flex justify-between">
    by {post.user.name}
    <a href={`${post.user.name}/posts/${post.id}/edit`} class="text-green-500">更新</a>
  </nav>
</article>