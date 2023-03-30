import API from "./apiService";

const CREATE_POST_URL = "/post/"

const savePostAsDraft = async  (postFormData) =>{
  const response = await API({
  method: 'post',
  url: CREATE_POST_URL,
  data: postFormData,
  headers: {
      'Content-Type': `multipart/form-data; boundary=${postFormData._boundary}`,
  },
});
return response;
};






export default {
  getAllPosts, savePostAsDraft, publishPost, votePost
};
