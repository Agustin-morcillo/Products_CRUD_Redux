import axios from "axios"

const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://redux-product-crud.herokuapp.com/api/",
})

export default axiosClient
