<script lang="ts">
  import type { ActionData } from "./$types";
  import type { SubmitFunction } from "$app/forms"
  import { enhance, applyAction } from "$app/forms";
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";

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

<form method="POST" on:submit={disabledSubmit} use:enhance={login}>
  <fieldset class="border mx-auto p-4 pt-2 rounded-lg text-center w-screen">
    <legend class="font-bold px-2">ログイン</legend>
    {#if form?.errors}
      <p class="text-red-500">{form.errors}</p>
    {/if}
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <button type="submit" disabled={isSubmitting} class="border bg-red-400 rounded-3xl w-1/3 text-white py-2 mt-2 hover:bg-red-300">ログイン</button>
  </fieldset>
</form>