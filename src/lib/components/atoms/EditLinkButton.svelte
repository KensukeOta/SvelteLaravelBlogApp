<script lang="ts">
	import type { Post } from "$lib/types/Post";

  export let post: Post;
</script>

<a href={`${post.user.name}/posts/${post.id}/edit`} class="text-green-500">更新</a>