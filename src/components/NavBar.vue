<template>
  <div id="nav" class="nav">
    <router-link to="/" class="app-name">Movie Ratings App</router-link>

    <nav>
      <router-link :to="{ name: 'movie-search' }">Search</router-link> |
      <router-link :to="{ name: 'movie-list' }">Favorites</router-link>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .app-name {
  font-size: 1.5em;
}

#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #3e8447;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

</style>
