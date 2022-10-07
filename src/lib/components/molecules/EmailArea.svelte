<script lang="ts">
  import Label from "../atoms/Label.svelte";
  import EmailInput from "../atoms/EmailInput.svelte";

  export let email: any;
</script>

<Label For="email">メールアドレス</Label>
<EmailInput email={email}/>