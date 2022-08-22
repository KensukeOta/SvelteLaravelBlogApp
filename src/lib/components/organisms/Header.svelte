<script lang="ts">
  import { page } from "$app/stores";
  import LogoutButton from "../atoms/LogoutButton.svelte";
</script>

<header class="flex justify-between border-b">
  <a href="/">SvelteLaravelBlogApp</a>

  <nav>
    {#if !$page.data.user}
    <a href="/signup">新規登録</a>
    <a href="/login">ログイン</a>
    {:else}
    <LogoutButton />
    {/if}
  </nav>
</header>