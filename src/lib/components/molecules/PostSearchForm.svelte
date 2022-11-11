<script lang="ts">
	import { enhance } from "$app/forms";
	import SearchInput from "../atoms/SearchInput.svelte";

  export let isShow: boolean;
</script>

<form method="GET" action="?/post_search" class={`${isShow ? "block" : "hidden"} lg:flex`} use:enhance>
  <SearchInput />
  <button type="submit" title="検索" class="hidden bg-gray-100 border border-l-0 px-2 rounded-r-lg text-center hover:bg-gray-200 lg:inline-block">
    <i class="bi bi-search"></i>
  </button>
</form>