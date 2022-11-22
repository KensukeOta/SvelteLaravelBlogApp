<script lang="ts">
  import { page } from "$app/stores";
  import { isLeftSideBarShow } from "$lib/stores/isLeftSideBarShow";
  import LogoutButton from "../atoms/LogoutButton.svelte";
	import PostSearchForm from "./PostSearchForm.svelte";

  let isShow = false;

  const toggleIsShow = () => {
    isShow = !isShow
  };

  const toggleIsLeftSideBarShow = () => {
    $isLeftSideBarShow = !$isLeftSideBarShow;
  };
</script>

<header class="flex justify-between border-b items-center relative">
  <div>
    {#if !($page.url.pathname === "/signup" || $page.url.pathname === "/login")}
      <button on:click={toggleIsLeftSideBarShow} class="leading-9 px-2 rounded-full hover:bg-gray-200">
        <i class="bi bi-list"></i>
      </button>
    {/if}

    <a href="/" class="leading-9">
      <img src="/svelte-logo.svg" alt="svelte logo" width="24" height="24" class="inline-block" />
      <h1 class="hidden font-bold lg:inline-block">
        SvelteLaravelBlogApp
      </h1>
    </a>
  </div>

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