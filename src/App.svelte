<script>
  import Component from "./component.svelte";
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    margin: -8px;
    overflow-y: hidden;
    width: 100%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .main {
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    height: 100vh;
    width: 5rem;
    position: fixed;
    background-color: grey;
    display: flex;
    flex-direction: column;
    transition: all 200ms ease;
  }
  .nav-item {
    display: inline-flex;
    align-items: center;
    margin: 20px;
  }

  .item-text {
    display: none;
    margin: 0px;
    margin-left: 20px;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .sidebar:hover .item-text {
    display: inline-flex;
  }

  .nav-item:hover {
    color: white;
  }

  .sidebar:hover {
    width: 15rem;
  }

  .size {
    width: 25px;
    height: 25px;
  }

  @media only screen and (max-width: 600px) {
  }
</style>

<main>
  <div class="sidebar">
    <div class="nav-item">
      <i class="fas fa-home size" />
      <h5 class="item-text">Home</h5>
    </div>
    <div class="nav-item">
      <i class="fab fa-wpexplorer size" />
      <h5 class="item-text">explore</h5>
    </div>
    <div class="nav-item">
      <i class="fas fa-cog size" />
      <h5 class="item-text">Settings</h5>
    </div>
  </div>
  <div class="main">
    <h1>Sveltegram</h1>
    <Component />
  </div>
</main>
