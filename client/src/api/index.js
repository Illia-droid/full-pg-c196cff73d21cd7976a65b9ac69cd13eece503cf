import axios from "axios";
import qs from "query-string";

const httpCLient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    amount: 5,
  };
  const finalyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpCLient.get(`/users?${qs.stringify(finalyOptions)}`);
};
export const createUser = (values) => {
  return httpCLient.post("/users", values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getOneUser = (id) => httpCLient.get(`/users/${id}`);

export const deleteUser = (id) => httpCLient.delete(`/users/${id}`);

export const updateUser = ({ id, data }) => {
  return httpCLient.patch(`/users/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllUsersTasks = ({ id }) =>
  httpCLient.get(`/users/${id}/tasks`);
