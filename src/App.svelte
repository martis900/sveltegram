<script>
  import Component from "./component.svelte";
  import SideBar from "./components/SideBar.svelte";
</script>

<style>
  main {
    display: flex;
    flex-direction: row;
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

  .main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s ease;
  }

  @media only screen and (max-width: 756px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-y: hidden;
      width: 100%;
    }
  }
</style>

<main>
  <SideBar />
  <div class="main">
    <h1>Sveltegram</h1>
    <Component />
  </div>
</main>
