<style>
  .sidebar {
    height: 100vh;
    width: 5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    transition: all 1000ms ease;
  }
  .nav-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    cursor: pointer;
  }

  .nav-item:hover {
    background-color: black;
  }

  .nav-item:hover .item-text {
    color: white;
  }

  .item-text {
    color: black;
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
    color: black;
  }

  .nav-item:hover .size {
    color: white;
  }

  .sidebar:hover {
    width: 15rem;
  }

  .size {
    color: black;
    width: 25px;
    height: 25px;
  }

  @media only screen and (max-width: 756px) {
    .sidebar {
      height: 5rem;
      width: 100%;

      background-color: white;
      display: flex;
      flex-direction: row;

      transition: all 2000ms ease;
    }

    .nav-item {
      min-width: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      cursor: pointer;
    }

    .nav-item:hover {
      background-color: black;
    }

    .nav-item:hover .item-text {
      color: white;
    }

    .item-text {
      display: none;
      color: black;
      margin-right: 15px;
    }

    .nav-item:last-child {
      padding-right: auto;
    }

    .sidebar:hover .item-text {
      display: flex;
      flex-direction: column;
    }

    .nav-item:hover {
      color: black;
    }
    .nav-item:hover .size {
      color: white;
    }
  }
</style>

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
