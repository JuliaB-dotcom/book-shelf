import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";

const axiosConfig = axios.create({
  baseURL: apiConfig.baseurl,
})