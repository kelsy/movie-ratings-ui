<template>
  <div v-if="movie && movie.title" class="movie-details">
    <div class="movie-poster">
      <img v-if="movie.poster" :src="movie.poster">
      <img v-else src="@/assets/film-reel.png">
    </div>

    <div class="movie-data">
      <h2>{{ movie.title }} ({{ movie.year ? movie.year : "Year Unknown" }})</h2>
      <p>{{ movie.plot }}</p>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Movie Not Found :(</h2>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<style scoped>
.movie-details {
  display: flex;
  padding: 30px;
}

.movie-data, .not-found {
  padding-left: 30px;
  width: 60%;
}

img {
  max-width: 100%;
  height: auto;
}

.movie-poster {
  width: 30%;
}
</style>
