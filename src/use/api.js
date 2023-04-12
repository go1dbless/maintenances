import axios from "axios"

export const api = axios.create({
  baseURL: "https://boards-api.ddev.site/api"
})
