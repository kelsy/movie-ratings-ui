<template>
  <div class="movie-show">
    <MovieDetails :movie="movie" />
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js"
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  props: ["id"],
  components: {
    MovieDetails
  },
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
