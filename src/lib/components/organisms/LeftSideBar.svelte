<script lang="ts">
  import { page } from "$app/stores";
  import { isLeftSideBarShow } from "$lib/stores/isLeftSideBarShow";
	import LeftSideLink from "../molecules/LeftSideLink.svelte";
</script>

{#if !($page.url.pathname === "/signup" || $page.url.pathname === "/login")}
  <nav class={`${$isLeftSideBarShow ? "block" : "hidden"} p-4 w-4/5 lg:w-80 lg:block lg:${!$isLeftSideBarShow ? "block" : "hidden"}`}>
    <LeftSideLink linkPath="/" iconPath="bi bi-house" linkMsg="トップページ" />
    <LeftSideLink linkPath="/posts/create" iconPath="bi bi-pencil-square" linkMsg="投稿する" />
  </nav>
{/if}