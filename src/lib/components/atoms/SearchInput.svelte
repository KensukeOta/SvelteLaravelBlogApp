<script lang="ts">
  import { searchKeyword } from "$lib/stores/searchKeyword"
</script>

<input type="text" name="search" id="search" bind:value={$searchKeyword} placeholder="記事を検索" class="border" />