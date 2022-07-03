<script lang="ts">
  import LogoutButton from "../atoms/LogoutButton.svelte";
</script>

<header class="flex justify-between border-b">
  <a href="/">SvelteLaravelBlogApp</a>

  <nav>
    <a href="/signup">新規登録</a>
    <a href="/login">ログイン</a>
    <LogoutButton />
  </nav>
</header>