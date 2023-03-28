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


const publishPost = async  (postFormData) =>{
  const draftResponse = await savePostAsDraft(postFormData);
 console.log(draftResponse);
  const response = await API({
  method: 'post',
  url: `${CREATE_POST_URL}publish/${draftResponse.data.id}`,
  
});
return response;
};


const votePost = async (postId, type) => {
  await API({
    method: 'put',
    url: `${CREATE_POST_URL}${type}/${postId}`,
    
  });
}



const getAllPosts = async () => {
  const response = await API.get(`/post/`);
  return response;
};

export default {
  getAllPosts, savePostAsDraft, publishPost, votePost
};
