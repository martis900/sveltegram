<script>
  export let likes;
  export let clicks;
  let clicked = true;

  $: clicks === 2 && handleLikes();

  function handleLikes() {
    if (clicked === true) {
      likes = likes + 1;
      clicked = false;
    } else {
      likes = likes - 1;
      clicked = true;
    }
  }
</script>

<style>
  .inline {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #like {
    margin: 5px;
  }
  .likeButton {
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .likeButton:focus {
    background-color: transparent;
  }
</style>

<div class="inline">

  {#if clicked === true}
    <button class="likeButton" on:click={handleLikes}>
      <i class="far fa-heart" style="color:red;height:25px;width:25px;" />
    </button>
  {:else}
    <button class="likeButton" on:click={handleLikes}>
      <i class="fas fa-heart" style="color:red;height:25px;width:25px;" />
    </button>
  {/if}
  <label id="like">{likes} likes</label>
</div>
