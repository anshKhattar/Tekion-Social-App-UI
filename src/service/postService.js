import API from "./apiService";

const getAllPosts = async () => {
  const response = await API.get(`/post/`,{
    headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbWFuTG92ZXJCb3kiLCJpYXQiOjE2Nzk4OTcwODAsImV4cCI6MTY3OTk4MzQ4MH0.H7oFgrm8V52Br2vnT5p_SMj_KcGO7CBm5xq0zmb4Uks"
    }
  });
  return response;
};

export default {
  getAllPosts,
};
