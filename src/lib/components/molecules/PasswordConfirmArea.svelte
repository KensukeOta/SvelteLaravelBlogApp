<script lang="ts">
  import Input from "../atoms/Input.svelte";
  import Label from "../atoms/Label.svelte";

  export let type: string;
  export let name: string;
  export let id: string;
  export let value: string | number;
  export let placeholder: string;
  export let className: string;

  const passwordConfirmProps = {
    type: type,
    name: name,
    id: id,
    value: value,
    placeholder: placeholder,
    className: className,
  };
</script>

<Label For="password_confirmation">パスワード確認</Label>
<Input {...passwordConfirmProps} />