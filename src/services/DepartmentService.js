import API from "./api";

export const addDepartment = (data) => {
  return API.post("/api/departments/add", data);
};

export const getAllDepartments = () => {
  return API.get("/api/departments/getall");
};

export const updateDepartment = (id, data) => {
  return API.put(`/api/departments/update/${id}`, data);
};

export const deleteDepartment = (id) => {
  return API.delete(`/api/departments/delete/${id}`);
};
