<script lang="ts">
  import { page } from "$app/stores";
  import LogoutButton from "../atoms/LogoutButton.svelte";
	import PostSearchForm from "../molecules/PostSearchForm.svelte";

  let isShow = false;

  const toggleIsShow = () => {
    isShow = !isShow
  };
</script>

<header class="flex justify-between border-b items-center relative">
  <a href="/" class="leading-9">
    <h1 class="font-bold">SvelteLaravelBlogApp</h1>
  </a>

  {#if $page.url.pathname === "/"}
    <PostSearchForm isShow={isShow} />
  {/if}

  <nav>
    {#if $page.url.pathname === "/"}
      <button on:click={toggleIsShow} title="検索" class={`${!isShow ? "inline-block" : "hidden"} leading-9 lg:hidden`}>
        <i class="bi bi-search"></i>
      </button>
      <button on:click={toggleIsShow} class={`${isShow ? "inline-block" : "hidden"} leading-9 lg:hidden`}>
        <i class="bi bi-x-lg"></i>
      </button>
    {/if}
    {#if !$page.data.user.name}
      <a href="/signup" class="inline-block leading-9">新規登録</a>
      <a href="/login" class="inline-block leading-9">ログイン</a>
    {:else}
      <LogoutButton />
    {/if}
  </nav>
</header>