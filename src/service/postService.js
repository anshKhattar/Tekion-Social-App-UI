import API from "./apiService";

const getAllPosts = async () => {
  const response = await API.get(`/post/`);
  return response;
};

export default {
  getAllPosts,
};
