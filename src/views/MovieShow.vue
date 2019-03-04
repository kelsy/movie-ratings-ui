<template>
  <div class="movie-show">
    <MovieDetails class="movie-details" :movie="movie" />
    <div class="movie-review" v-if="movie">
      <h2>Review:</h2>
      <p>{{ movie.review }}</p>
      <p><b>Rating:</b> {{ movie.rating }} / 5</p>
    </div>
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js"
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  props: {
    id: [String, Number],
    movieData: null
  },
  components: {
    MovieDetails
  },
  data() {
    return {
      movie: null
    }
  },
  created() {
    if (this.movieData) {
      this.movie = this.movieData
    } else {
      MovieService.getMovie(this.id)
        .then(response => {
          this.movie = response.data
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    }
  }
}
</script>

<style scoped>
.movie-show {
  display: flex;
}

.movie-details {
  width: 60%;
}

.movie-review {
  padding: 30px;
  text-align: left;
  width: 30%;
}

label {
  padding-right: 20px;
}
</style>
