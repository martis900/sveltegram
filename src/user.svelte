<script>
  export let name;
  export let image;
</script>

<style>
  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 25px;
  }
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  .item:last-child {
    margin-left: auto;
  }
</style>

<div class="user">
  <img class="image item" src={image} alt={name} />
  <h4 class="item" style="margin:20px">{name}</h4>
  <h6 class="item" style="cursor: pointer;">Follow</h6>
</div>
