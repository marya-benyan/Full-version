import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
  withCredentials: true, // Send cookies with requests
});

// User-related API calls
export const registerUser = (userData) => api.post("/users/register", userData);
export const loginUser = (credentials) => api.post("/users/login", credentials);
export const logoutUser = () => api.post("/users/logout");
export const getUserById = () => api.get("/users/me"); // Fetch current user data
export const updateUser = (userData) => api.put("/users/me", userData); // Update user data

export default api;