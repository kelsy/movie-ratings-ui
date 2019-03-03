<template>
  <div class="movie-show">
    <h1>Movie: {{ movie.title }}</h1>
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js"

export default {
  props: ["id"],
  data() {
    return {
      movie: {}
    }
  },
  created() {
    MovieService.getMovie(this.id)
      .then(response => {
        this.movie = response.data
      })
      .catch(error => {
        console.log("There was an error:", error.response)
      })
  }
}
</script>

<style lang="css" scoped>
</style>
