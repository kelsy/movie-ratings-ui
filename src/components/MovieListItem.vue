<template>
  <div class="movie-list-item">
    {{ movie.title }} - 
    <router-link v-if="movie.id"
                 class="movie-link"
                 :to="{ name: 'movie-show', params: { id: movie.id } }">
      Edit
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>
