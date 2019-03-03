<template>
  <div v-if="movie.title" class="movie-details">
   <h2>{{ movie.title }}</h2>

   <MovieReviewShow v-if="movie.id" :review="movie.review" />
   <MovieReviewCreate v-else :movie="movie" />
  </div>

  <div v-else class="not-found">
    Movie Not Found.
  </div>
</template>

<script>
import MovieReviewCreate from '@/components/MovieReviewCreate.vue'
import MovieReviewShow from '@/components/MovieReviewShow.vue'

export default {
  components: {
    MovieReviewCreate,
    MovieReviewShow
  },
  props: {
    movie: Object
  }
}
</script>
