<script lang="ts">
  import { goto } from "$app/navigation";
  import { axios } from "$lib/axios";

  const logout = async () => {
    await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);
    await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`);
    goto("/login", { replaceState: true });
  };
</script>

<button on:click={logout} class="leading-9">ログアウト</button>