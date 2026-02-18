import api from "../security/AxiosConfig";

const USER_BASE_URL = "/api/v5/vanshawali";

/**
 * 🔐 SECURED APIs
 */
export const userList = () =>
  api.get(`${USER_BASE_URL}/user/list`);

export const createUser = (formData) =>
  api.post(`${USER_BASE_URL}/user/create`, formData);

export const singleUser = (userId) =>
  api.get(`${USER_BASE_URL}/user/${userId}`);

export const updateUser = (userId, user) =>
  api.put(`${USER_BASE_URL}/user/update/${userId}`, user);

export const deleteUser = (userId) =>
  api.delete(`${USER_BASE_URL}/user/delete/${userId}`);

/**
 * 🔓 PUBLIC APIs
 */
export const createNewAccount = (user) =>
  api.post(`${USER_BASE_URL}/signupuser/create`, user);

export const loginUser = (loginData) =>
  api.post(`${USER_BASE_URL}/auth/login`, loginData);