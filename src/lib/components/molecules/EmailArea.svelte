<script lang="ts">
  import Label from "../atoms/Label.svelte";
  import EmailInput from "../atoms/EmailInput.svelte";

  export let email: any;
</script>

<dt>
  <Label For="email">メールアドレス</Label>
</dt>
<dd>
  <EmailInput email={email}/>
</dd>