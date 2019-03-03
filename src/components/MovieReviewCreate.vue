<template>
  <div class="movie-review-create">
    <h2>Add a Review</h2>

    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul v-for="error in errors">
          <li>{{error}}</li>
        </ul>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
</template>

<script>
import MovieService from "@/services/MovieService.js"

export default {
  props: {
    movie: Object
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
      if (this.review && this.rating) {
        let movieReview = {
          title: this.movie.title,
          review: this.review,
          rating: this.rating
        }

        MovieService.saveMovieReview(movieReview)
          .then(response => {
            // The response data should have the saved ID
            // Not sure what we want to do with that yet
            // If anything.
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
        if(!this.review) this.errors.push("Review required.")
        if(!this.rating) this.errors.push("Rating required.")
      }
    }
  }
}
</script>
