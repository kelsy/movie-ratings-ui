<template>
  <div class="movie-list">
    <h1>Favorite Movies</h1>
    <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import MovieService from '@/services/MovieService.js'
import MovieListItem from '@/components/MovieListItem.vue'

export default {
  components: {
    MovieListItem
  },
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
