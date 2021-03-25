import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getRecipes() {
    return service
      .get("/api/recipes")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  createRecipee(recipeInfo) {
    return service
      .post("/api/recipes", recipeInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteRecipe(itemId) {
    return service
      .delete("/api/recipes/" + itemId)
      .then(() => {
        console.log("successfully deleted");
      })
      .catch(errorHandler);
  },

  getOneRecipe(id) {
    return service
      .get(`/api/recipes/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addRate(rateInfo) {
    return service
      .post("/api/ratings", rateInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getRatings() {
    return service
      .get("/api/ratings")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
