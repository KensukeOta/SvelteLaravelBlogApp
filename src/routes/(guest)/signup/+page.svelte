<script lang="ts">
	import type { ActionData } from "./$types";
  import type { SubmitFunction } from "$app/forms";
  import { applyAction } from "$app/forms";
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { axios } from "$lib/axios";
  import NameArea from "$lib/components/molecules/NameArea.svelte";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import PasswordConfirmArea from "$lib/components/molecules/PasswordConfirmArea.svelte";
	import SubmitButton from "$lib/components/atoms/SubmitButton.svelte";

  let isSubmitting: boolean = false;

  export let form: ActionData;

  const nameProps = {
    type: "text",
    name: "name",
    id: "name",
    value: `${form?.name ?? ""}`,
    placeholder: "名前",
    className: `border block mx-auto p-2 rounded-3xl w-4/5`,
  };

  const emailProps = {
    type: "email",
    name: "email",
    id: "email",
    value: `${form?.email ?? ""}`,
    placeholder: "メールアドレス",
    className: `border block mx-auto p-2 rounded-3xl w-4/5`,
  };

  const passwordProps = {
    type: "password",
    name: "password",
    id: "password",
    value: "",
    placeholder: "パスワード",
    className: `border block mx-auto p-2 rounded-3xl w-4/5`,
  };

  const passwordConfirmProps = {
    type: "password",
    name: "password_confirmation",
    id: "password_confirmation",
    value: "",
    placeholder: "パスワード確認",
    className: `border block mx-auto p-2 rounded-3xl w-4/5`,
  };

  const disabledSubmit = () => {
    isSubmitting = !isSubmitting;
    setTimeout(() => {
      isSubmitting = false;
    }, 3000);
  };

  const register: SubmitFunction = ({ data }) => {
    return async ({ result, update }) => {
      await applyAction(result);

      if (result.type === "success") {
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

<form method="POST" on:submit={disabledSubmit} use:enhance={register} class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-screen">
  <fieldset class="border-2 border-red-400 p-4 pt-2 rounded-3xl">
    <legend class="font-bold px-2">登録</legend>
    {#if form?.errors}
      <p class="text-red-500">{form.errors.message}</p>
    {/if}
    <NameArea {...nameProps} />
    <EmailArea {...emailProps} />
    <PasswordArea {...passwordProps} />
    <PasswordConfirmArea {...passwordConfirmProps} />
    <SubmitButton disabled={isSubmitting}>登録</SubmitButton>
  </fieldset>
</form>