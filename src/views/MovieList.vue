<template>
  <div class="movie-list">
    <h1>Favorite Movies</h1>
    <template v-for="movie in movies">
      <router-link class="movie-link"
             :to="{ name: 'movie-show', params: { id: movie.id } }">
        <div class="movie-info">
          {{ movie.id }} - {{ movie.title }}
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import MovieService from '@/services/MovieService.js'

export default {
  data() {
    return {
      movies: []
    }
  },
  created() {
    MovieService.getMovies()
      .then(response => {
        this.movies = response.data
      })
      .catch(error => {
        console.log("There was an error:" + error.response)
      })
  }
}
</script>

<style lang="css" scoped>
</style>
