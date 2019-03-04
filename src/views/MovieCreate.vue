<template>
  <div class="movie-create">
    <MovieDetails class="movie-details" :movie="movie" />
    
    <div class="movie-review" v-if="movie && movie.title">
      <h2>Add a Review</h2>

      <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul v-for="error in errors">
            <li>{{error}}</li>
          </ul>
        </p>

        <p class="form-row">
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>

        <div class="form-row">
          <label for="review">Review:</label>

          <p><textarea id="review" v-model="review"></textarea></p>
        </div>

        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js"
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  props: {
    movie: Object
  },
  components: {
    MovieDetails
  },
  data() {
    return {
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.movie && this.review && this.rating) {
        let movieData = {
          title: this.movie.title,
          review: this.review,
          rating: this.rating
        }

        MovieService.saveMovie(movieData)
          .then(response => {
            let id = response.data.id
            if (id) {
              this.$router.push({
                name: 'movie-show',
                params: { id: id }
              })
            } else {
              console.log(response.data)
            }
          })
          .catch(error => {
            console.log("There was an error:", error.response)
          })

        this.review = null
        this.rating = null
      } else {
        if (!this.movie) this.errors.push("Movie required.")
        if (!this.review) this.errors.push("Review required.")
        if (!this.rating) this.errors.push("Rating required.")
      }
    }
  }
}
</script>

<style scoped>
.movie-create {
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

.form-row {
  padding-bottom: 15px;
}
</style>
