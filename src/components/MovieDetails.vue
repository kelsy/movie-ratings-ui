<template>
    <div v-if="movie.title" class="movie-details">
     <h2>{{ movie.title }}</h2>
     <p>Favorite Movie? {{ movie.id ? "Yes" : "No" }}</p>
    </div>

    <div v-else class="not-found">
      Movie Not Found.
    </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>
