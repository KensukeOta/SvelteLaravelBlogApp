<script lang="ts">
	import type { ActionData } from "./$types";
  import type { SubmitFunction } from "$app/forms";
  import { applyAction } from "$app/forms";
	import { enhance } from "$app/forms";
	import { goto, invalidateAll } from "$app/navigation";
	import { axios } from "$lib/axios";
  import NameArea from "$lib/components/molecules/NameArea.svelte";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import PasswordConfirmArea from "$lib/components/molecules/PasswordConfirmArea.svelte";

  let isSubmitting: boolean = false;

  export let form: ActionData;

  const disabledSubmit = () => {
    isSubmitting = !isSubmitting;
    setTimeout(() => {
      isSubmitting = false;
    }, 3000);
  };

  const register: SubmitFunction = ({ data }) => {
    return async ({ result, update }) => {
      await applyAction(result);

      if (result.type !== "invalid") {
        await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);
        await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email: data.get("email"), password: data.get("password") });
        goto("/", { replaceState: true });
      }
    };
  };
</script>

<svelte:head>
  <title>ユーザー登録フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">ユーザー登録フォーム</h1>

<form method="POST" on:submit={disabledSubmit} use:enhance={register}>
  <fieldset class="border w-0">
    <legend>登録</legend>
    {#if form?.errors}
      <p class="text-red-500">{form.errors}</p>
    {/if}
    <NameArea name={form?.name ?? ""} />
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <PasswordConfirmArea />
    <button type="submit" disabled={isSubmitting}>登録</button>
  </fieldset>
</form>