<template>
  <div class="movie-search">
    <h1>Find a Movie</h1>

    <form class="movie-search-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul v-for="error in errors">
          <li>{{error}}</li>
        </ul>
      </p>

      <p>
        <label for="name">Movie Title: </label>
        <input id="title" v-model="title">
      </p>

      <p>
        <input type="submit" value="Search">
      </p>
    </form>

    <MovieDetails v-if="movie" :movie="movie"/>
  </div>
</template>

<script>
import MovieDetails from '@/components/MovieDetails.vue'
import MovieService from '@/services/MovieService.js'

export default {
  components: {
    MovieDetails
  },
  data() {
    return {
      title: null,
      errors: [],
      movie: null
    }
  },
  methods: {
    onSubmit() {
      if (this.title) {
        MovieService.searchMovies(this.title)
          .then(response => {
            this.movie = response.data
          })
          .catch(error => {
            console.log("There was an error:", error.response)
          })

        // reset all the values after submit
        this.title = null
      } else {
        if(!this.title) this.errors.push("Title required.")
      }
    }
  }
}
</script>

<style scoped>
</style>
