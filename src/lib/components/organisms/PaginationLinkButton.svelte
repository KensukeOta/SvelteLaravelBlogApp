<script lang="ts">
  export let posts: any;
</script>

{#each posts.links as link}
  <a 
    href={Number(link.label) ? `/?page=${link.label}`  : link.label.includes("前") ? `/?page=${posts.current_page - 1}`  : `/?page=${posts.current_page + 1}`} 
    class={`${link.active && "bg-blue-500 pointer-events-none"} ${(!posts.prev_page_url && link.label.includes("前")) && "hidden"} ${(!posts.next_page_url && link.label.includes("次")) && "hidden"} font-bold border p-4`}>
      {@html link.label}
  </a>
  {/each}