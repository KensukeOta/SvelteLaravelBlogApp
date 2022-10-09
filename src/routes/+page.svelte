<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">トップページ</h1>

<p>Welcome! {$page.data.user.name ? $page.data.user.name : "stranger"}</p>