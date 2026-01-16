import API from "./api";

export const addUser = (data) => API.post("/api/users/add", data);
export const getAllUsers = () => API.get("/api/users/all");
export const loginUser = (data) => { return API.post("/api/auth/login", data)};
