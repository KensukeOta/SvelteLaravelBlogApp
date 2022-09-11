<script lang="ts">
  import NameArea from "$lib/components/molecules/NameArea.svelte";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import PasswordConfirmArea from "$lib/components/molecules/PasswordConfirmArea.svelte";

  export let form: any;
</script>

<svelte:head>
  <title>ユーザー登録フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">ユーザー登録フォーム</h1>

<form method="post">
  {#if form?.errors}
    <p class="text-red-500">{form.errors}</p>
  {/if}
  <dl>
    <NameArea name={form?.name ?? ""} />
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <PasswordConfirmArea />
    <button type="submit">登録</button>
  </dl>
</form>