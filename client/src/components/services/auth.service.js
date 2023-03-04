import axios from 'axios';

const baseURL = "https://project-elw-for-robot-dev-using-mern-stack-nghi.vercel.app/api";

const instance = axios.create({
  baseURL: "/api",
});

// Add a request interceptor to set the x-access-token header
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("x-access-token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register request
const register = (newUser) => {
  return instance
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// Login request
const login = (userCredential) => {
  return instance
    .post(`${baseURL}/login`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// Logout service
const logout = () => {
  localStorage.removeItem("x-access-token");
  return { msg: "Logout Successfully..!" };
};

export { register, login, logout };
