<script lang="ts">
  import { searchKeyword } from "$lib/stores/searchKeyword";
</script>

<input type="text" name="q" id="search" bind:value={$searchKeyword} placeholder="記事を検索" class="absolute top-9 left-0 w-full inline-block border rounded-lg lg:static lg:rounded-r-none" />