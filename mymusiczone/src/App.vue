<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view/> -->
  <div class="ss">
    <div class="text">一枝红艳露凝香</div>
    <div class="text">云雨巫山枉断肠</div>
  </div>
  <div
    style="height: 80px; background: #dddddd33; backdrop-filter: blur(10px)"
  ></div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ss {
  z-index: -1;
  background-image: linear-gradient(150deg,#f52443,#2394ef,#99CCCC,#FFCC99,#99CC99);
  background-size: 500%;
  position: absolute;
  width: 100%;
  height: 100%;
  //filter: blur(2px);
  animation: sun 35s infinite;
  font-size: 40px;

  .text {
    z-index: 1;
    color: #fff;
    text-shadow: 2px 2px 3px #555;
    font-weight: 600;
    letter-spacing: 4px;
  }
}

@keyframes sun {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
