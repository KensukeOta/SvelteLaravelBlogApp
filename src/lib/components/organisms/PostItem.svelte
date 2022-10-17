<script lang="ts">
	import type { Post } from "$lib/types/Post";

  export let post: Post
</script>

<article class="border p-2">
  <h1 class="font-bold">{post.title}</h1>
  <nav>
    <p class="flex justify-between">by {post.user.name}</p>
  </nav>
</article>