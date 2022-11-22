<script lang="ts">
  export let linkPath: string
  export let iconPath: string
  export let linkMsg: string
</script>

<a href={`${linkPath}`}>
  <div class="mb-2 py-2 rounded-3xl text-center hover:bg-red-300">
    <i class={`${iconPath}`}></i> <span class="font-bold">{linkMsg}</span>
  </div>
</a>