<script lang="ts">
	import { enhance } from "$app/forms";
	import SearchInput from "../atoms/SearchInput.svelte";

  export let isShow: boolean;
</script>

<form method="GET" action="?/post_search" class={`${isShow ? "block" : "hidden"} lg:flex`} use:enhance>
  <SearchInput />
  <button type="submit" class="hidden lg:inline-block ml-1">
    <i title="検索" class="bi bi-search"></i>
  </button>
</form>