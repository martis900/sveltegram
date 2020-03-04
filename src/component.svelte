<script>
  import Counter from "./counter.svelte";
  import { posts } from "./store";
</script>

<style>
  .container {
    height: 100vh;
    overflow: scroll;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each $posts as post}
    <Counter {...post} />
  {/each}
</div>
