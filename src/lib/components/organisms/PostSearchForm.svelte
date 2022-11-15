<script lang="ts">
	import { goto } from "$app/navigation";
	import SearchInput from "../atoms/SearchInput.svelte";

  export let isShow: boolean;

  const searchPost = (event: any) => {
    const q = new FormData(event.target).get("q") as any;
    goto(q ? `?search=${encodeURIComponent(q)}` : "/");
  };
</script>

<form on:submit|preventDefault={searchPost} class={`${isShow ? "block" : "hidden"} lg:flex`}>
  <SearchInput />
  <button type="submit" title="検索" class="hidden bg-gray-100 border border-l-0 px-2 rounded-r-lg text-center hover:bg-gray-200 lg:inline-block">
    <i class="bi bi-search"></i>
  </button>
</form>