<script lang="ts">
  import { page } from "$app/stores";
  import LogoutButton from "../atoms/LogoutButton.svelte";
	import SearchInput from "../atoms/SearchInput.svelte";
</script>

<header class="flex justify-between border-b items-center">
  <a href="/" class="leading-9">
    <h1 class="font-bold">SvelteLaravelBlogApp</h1>
  </a>

  {#if $page.url.pathname === "/"}
    <SearchInput />
  {/if}

  <nav>
    {#if !$page.data.user.name}
    <a href="/signup" class="inline-block leading-9">新規登録</a>
    <a href="/login" class="inline-block leading-9">ログイン</a>
    {:else}
    <LogoutButton />
    {/if}
  </nav>
</header>