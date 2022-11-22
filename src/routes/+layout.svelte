<script lang="ts">
  import "../app.css";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import Header from "$lib/components/organisms/Header.svelte";
	import LeftSideBar from "$lib/components/organisms/LeftSideBar.svelte";
  import Footer from "$lib/components/organisms/Footer.svelte";
</script>

<Header />

<div class="flex justify-between">
  <LeftSideBar />
  <div class="w-full">
    <slot />
  </div>
</div>

<Footer />