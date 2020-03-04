<script>
  import { flip } from "svelte/animate";
  import { fly, fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  import User from "./user.svelte";
  import Like from "./Like.svelte";

  export let text;
  export let likes;
  export let photos;
  export let user;
  export let comments;

  let limit = 4;
  let more = false;
  let clicks = 0;

  $: if (clicks > 0) {
    setTimeout(() => (clicks = 0), 300);
  }

  function LoadMore() {
    if (more) {
      limit = 4;
      more = false;
    } else {
      limit = comments.length;
      more = true;
    }
  }

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
            transform: ${transform} scale(${t});
            opacity: ${t}
		`
      };
    }
  });
</script>

<style>
  .item {
    color: black;
    padding: 25px;
    border: 5px white solid;
    width: 500px;
    margin-top: 25px;
    border: 2px rgba(0, 0, 0, 0.2) solid;
    border-radius: 15px;
  }
  .postimage {
    object-fit: cover;
    height: 500px;
    width: 500px;
    background-color: white;
    user-select: none;
    border-radius: 10px;
    padding-bottom: 15px;
  }
  .loadmore {
    background-color: transparent;
    outline: none;
    border: none;
    color: rgba(0, 0, 0, 0.5);
  }

  .loadmore:focus {
    background-color: transparent;
  }
  .list {
    display: flex;
    flex-direction: column;
    transition: all 2s ease;
  }
</style>

<div transition:fade={{ delay: 250, duration: 300 }} class="item">
  <User {...user} />
  <img
    on:click|preventDefault={() => (clicks += 1)}
    class="postimage"
    src={photos[0]}
    alt={text}
    draggable="false" />
  <Like {likes} {clicks} />
  <label style="margin-bottom:10px;">
    <b>{user.name}</b>
    {text}
  </label>

  {#if comments.length > 0}
    <div class="list">
      {#each comments.slice(0, limit) as comment, index (comment)}
        <label
          in:receive={{ key: comment.text }}
          out:send={{ key: comment.text }}
          animate:flip={{ duration: 500 }}>
          <b>{comment.user}</b>
          {comment.text}
        </label>
      {/each}
    </div>
    <button class="loadmore" on:click={LoadMore}>
      {more ? 'show less' : 'show more'}
    </button>
  {/if}
</div>
