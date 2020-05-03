<template>
  <div id="app">
    <div id="nav">
      <ul style="height:80px;">
        <img
          class="lo"
          height="50px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRxzAoEbKJKHqkpSXfwM3hyEgPyJJPuE5tsk1xjXJElbTjIQH&usqp=CAU"
          alt=""
        />
        <router-link tag="li" class="iten-nav" exact to="/" active-class
          ><a>Home</a></router-link
        >
        <router-link tag="li" class="iten-nav" to="/posts"
          ><a>posts</a></router-link
        >
        <router-link tag="li" class="iten-nav" to="/help"
          ><a>help</a></router-link
        >
        <router-link tag="li" class="iten-nav" to="/us"><a>us</a></router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    &.router-link-exact-active {
    }
  }
}
</style>
