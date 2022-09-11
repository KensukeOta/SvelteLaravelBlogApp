<script lang="ts">
  import EmailArea from "$lib/components/molecules/EmailArea.svelte";
  import PasswordArea from "$lib/components/molecules/PasswordArea.svelte";

  export let form: any;
</script>

<svelte:head>
  <title>ログインフォーム - SvelteLaravelBlogApp</title>
</svelte:head>

<h1 class="font-bold">ログインフォーム</h1>
<form method="post">
  {#if form?.errors}
    <p class="text-red-500">{form.errors}</p>
  {/if}
  <dl>
    <EmailArea email={form?.email ?? ""} />
    <PasswordArea />
    <button type="submit">ログイン</button>
  </dl>
</form>