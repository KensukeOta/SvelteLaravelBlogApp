<script lang="ts">
  import type { ActionData } from "./$types";
  import type { SubmitFunction } from "$app/forms"
  import { enhance, applyAction } from "$app/forms";
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";

  export let form: ActionData;

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

<form method="POST" use:enhance={login}>
  <fieldset class="border w-0">
    <legend>ログイン</legend>
    {#if form?.errors}
      <p class="text-red-500">{form.errors}</p>
    {/if}
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <button type="submit">ログイン</button>
  </fieldset>
</form>