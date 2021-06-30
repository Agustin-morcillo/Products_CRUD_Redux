import axios from "axios"

const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://products-crud-redux.vercel.app/api/",
})

export default axiosClient
