<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { page } from "$app/stores"
	import { enhance } from "$app/forms";
  import PostArea from "$lib/components/molecules/PostArea.svelte";
  import TitleArea from "$lib/components/molecules/TitleArea.svelte";
	import Input from "$lib/components/atoms/Input.svelte";
	import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

  let isSubmitting: boolean = false;

  export let form: ActionData;
  export let data: PageData;

  const titleProps = {
    type: "text",
    name: "title",
    id: "title",
    value: `${data.post.title || form?.title}`,
    placeholder: "タイトル",
    className: `block border`,
  };

  const userIdProps = {
    type: "hidden",
    name: "user_id",
    id: "user_id",
    value: `${$page.data.user.id}`,
    placeholder: "",
    className: ``,
  };

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
  <TitleArea {...titleProps} />
  <PostArea body={data.post.body || form?.body} />
  <Input {...userIdProps} />
  <SubmitButton disabled={isSubmitting} className="w-48">更新する</SubmitButton>
</form>