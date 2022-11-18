<script lang="ts">
  import type { ActionData } from "./$types";
  import type { SubmitFunction } from "$app/forms"
  import { enhance, applyAction } from "$app/forms";
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
	import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

  let isSubmitting: boolean = false;

  export let form: ActionData;

  const disabledSubmit = () => {
    isSubmitting = !isSubmitting;
    setTimeout(() => {
      isSubmitting = false;
    }, 3000);
  };

  const login: SubmitFunction = ({ data }) => {
    return async ({ result, update }) => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);
        await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email: data.get("email"), password: data.get("password") });
        goto("/", { replaceState: true });
      } catch (error) {
        await applyAction(result);
      }
    }
  };
</script>

<svelte:head>
  <title>ログインフォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">ログインフォーム</h1>

<form method="POST" on:submit={disabledSubmit} use:enhance={login} class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-screen">
  <fieldset class="border-2 border-red-400 p-4 pt-2 rounded-3xl">
    <legend class="font-bold px-2">ログイン</legend>
    {#if form?.errors}
      <p class="text-red-500">{form.errors}</p>
    {/if}
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <SubmitButton disabled={isSubmitting}>ログイン</SubmitButton>
  </fieldset>
</form>