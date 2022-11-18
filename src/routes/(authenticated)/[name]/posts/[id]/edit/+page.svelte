<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { page } from "$app/stores"
	import { enhance } from "$app/forms";
	import UserIdInput from "$lib/components/atoms/UserIdInput.svelte";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";
	import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

  let isSubmitting: boolean = false;

  export let form: ActionData;
  export let data: PageData;

  const disabledSubmit = () => {
    isSubmitting = !isSubmitting;
    setTimeout(() => {
      isSubmitting = false;
    }, 2000);
  };
</script>

<svelte:head>
  <title>記事更新フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">記事更新フォーム</h1>

<form method="POST" on:submit={disabledSubmit} use:enhance>
  {#if form?.errors}
    <p class="text-red-500">{form.errors}</p>
  {/if}
  <TitleArea title={data.post.title || form?.title} />
  <PostArea body={data.post.body || form?.body} />
  <UserIdInput id={$page.data.user.id} />
  <SubmitButton disabled={isSubmitting} className="w-48">更新する</SubmitButton>
</form>