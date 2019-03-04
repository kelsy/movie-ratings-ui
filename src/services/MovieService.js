import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  searchMovies(title) {
    return apiClient.get("/find_movie?title=" + title)
  },
  getMovie(id) {
    return apiClient.get("/movie/" + id)
  },
  getMovies() {
    // Would want to scope this to the user
    // when we add the idea of users
    return apiClient.get("/movies")
  },
  saveMovie(movie) {
    return apiClient.post("/movie", movie)
  }
}
