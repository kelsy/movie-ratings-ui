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
  </div>
</template>

<script>

import MovieService from '@/services/MovieService.js'

export default {
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
            let movie = response.data

            if (movie) {
              this.$router.push({
                name: 'movie-create',
                params: { movie: movie }
              })
            } else {
              console.log(response.data)
            }
          })
          .catch(error => {
            console.log("There was an error:", error.response)
          })
      } else {
        if(!this.title) this.errors.push("Title required.")
      }
    }
  }
}
</script>

<style scoped>
</style>
