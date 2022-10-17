<script lang="ts">
  import type { Post } from "$lib/types/Post";
	import { invalidateAll } from "$app/navigation";
	import { axios } from "$lib/axios";

  export let post: Post;

  const destroy = async () => {
    if (!confirm("記事を削除しますか？")) {
      return;
    }
    
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${post.id}/destroy`);
    invalidateAll();
  };
</script>

<button on:click={destroy} class="text-red-500">削除</button>