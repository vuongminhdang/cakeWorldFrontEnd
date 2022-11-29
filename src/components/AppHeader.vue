<template>
  <div class="navbar">
    <fa icon="cake" class="logo" />
    <div class="greeting">CAKE'S WORLD</div>
    <div class="task">
      <ul class="task-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/customers">Customers</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style>
.navbar {
  margin-top: -63px;
  margin-left: -60px;
  width: 100%;
  height: 80px;
  /* background-image: linear-gradient(
    to bottom,
    rgb(99, 66, 4),
    rgb(177, 132, 103)
  ); */
  background: transparent;
  color: rgb(255, 255, 255);
  /*margin: -30px -60px -20px;*/
  display: flex;
  position: fixed;
  justify-content: start;
}
.logo {
  font-size: 50px;
  margin: 10px;
}
.greeting {
  display: flex;
  align-items: center;
  font-size: xxx-large;
  font-family: "Dancing Script";
  font-weight: 900;
}
.greeting :hover {
  opacity: 0.2;
}
.task {
  width: 65%;
  display: flex;
  justify-content: end;
}
.task-nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.task-nav li {
  list-style-type: none;
}

.task-nav li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-family: fantasy;
}
</style>
