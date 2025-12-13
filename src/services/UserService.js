// userService.js
import API from "./api";

export const addUser = (data) => API.post("/users/add", data);
export const getAllUsers = () => API.get("/users/all");
