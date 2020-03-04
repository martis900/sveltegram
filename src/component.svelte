<script>
  import Counter from "./counter.svelte";
  import { posts } from "./store";
</script>

<style>
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 2s ease;
  }
  .main {
    width: 80vw;
    overflow: scroll;
  }
</style>

<div class="main">
  <div class="container">
    {#each $posts as post}
      <Counter {...post} />
    {/each}
  </div>

</div>
