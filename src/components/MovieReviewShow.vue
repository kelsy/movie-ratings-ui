<template>
  <div class="movie-review-show">
    <h2>Review:</h2>
    <p>Favorite Movie? Yes!</p>
    <p>{{ review.review }}</p>
    <p>Rating: {{ review.rating }}</p>
  </div>
</template>

<script>
export default {
  props: {
    review: Object
  }
}
</script>
