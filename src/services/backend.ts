import axios from "axios";
import { CompleteTour, Filter, Tour } from "./types";
import { User } from "@/store/userSlice";

// const BASE_URL = "https://tour-next.onrender.com/";
//  {
//   withCredentials: true,
// }
const BASE_URL = "http://localhost:3000/";

export async function getTours(filter: Filter): Promise<Tour[]> {
  console.log(filter);
  let url = `${BASE_URL}api/v1/tours?`;
  if (filter.category) {
    url += `category=${filter.category}&`;
  }
  const response = await axios.get(url);
  return response?.data?.data?.doc;
}

export async function getSingleTour(id: string): Promise<CompleteTour> {
  const res = await axios.get(`${BASE_URL}api/v1/tours/${id}`);
  const data = res.data.data.doc;
  return data;
}

export async function getUser() {
  const res = await axios.get(`${BASE_URL}api/v1/users/isLogedIn`);
  return res.data.user;
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<User> {
  const res = await axios.post(`${BASE_URL}api/v1/users/login`, data);
  const user = res.data.data.user;
  return user;
}

interface signBody {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export async function signUpUser(body: signBody): Promise<User> {
  const res = await axios.post(`${BASE_URL}api/v1/users/signup`, body);
  return res.data.data.user;
}
