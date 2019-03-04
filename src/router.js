import Vue from 'vue'
import Router from 'vue-router'
import MovieCreate from './views/MovieCreate.vue'
import MovieList from './views/MovieList.vue'
import MovieSearch from './views/MovieSearch.vue'
import MovieShow from './views/MovieShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "movie-search",
      component: MovieSearch
    },
    {
      path: "/movie/:id",
      name: "movie-show",
      component: MovieShow,
      props: true
    },
    {
      path: "/movie-create",
      name: "movie-create",
      component: MovieCreate,
      props: true
    },
    {
      path: "/movies",
      name: "movie-list",
      component: MovieList
    }
  ]
})
