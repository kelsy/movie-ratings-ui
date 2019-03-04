<template>
  <div class="movie-search">
    <h1>Find a Movie</h1>

    <form class="movie-search-form" @submit.prevent="onSubmit">
      <div v-if="errors.length">
        <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
      </div>

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

            if (movie.id) {
              this.$router.push({
                name: 'movie-show',
                params: { id: movie.id, movieData: movie }
              })
            } else if (movie.title) {
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
        this.errors = []
        if(!this.title) this.errors.push("Title required.")
      }
    }
  }
}
</script>

<style scoped>
</style>
