<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title} - SvelteLaravelBlogApp</title>
</svelte:head>

<div class="bg-gray-100 h-screen pt-6 px-4">
  <div class="bg-white h-full p-8">
    <h1 class="font-bold mb-12 text-3xl">{data.post.title}</h1>
    
    <p class="text-base whitespace-pre-line">{data.post.body}</p>
  </div>
</div>