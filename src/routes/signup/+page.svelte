<script lang="ts">
  import NameArea from "$lib/components/molecules/NameArea.svelte";
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";
  import PasswordConfirmArea from "$lib/components/molecules/PasswordConfirmArea.svelte";

  export let errors: any;
</script>

<svelte:head>
  <title>ユーザー登録フォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">ユーザー登録フォーム</h1>

<form method="post">
  {#if errors}
    <p class="text-red-500">{errors.errorMsg}</p>
  {/if}
  <dl>
    <NameArea />
    <EmailArea />
    <PasswordArea />
    <PasswordConfirmArea />
    <button type="submit">登録</button>
  </dl>
</form>