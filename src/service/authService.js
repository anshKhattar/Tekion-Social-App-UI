import API from "./apiService";
const REGISTER_URL = "/api/auth/signup";
const SIGNIN_URL = "/api/auth/signin";



const signUpRequest = async  (bodyFormData) =>{
    const response = await API({
    method: 'post',
    url: REGISTER_URL,
    data: bodyFormData,
    headers: {
        'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
    },
});
return response;
};



const loginRequest = async (user) => {
    const response = await API.post(SIGNIN_URL, JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json"
        }
     });    
     return response;
  };




export default {
    signUpRequest,loginRequest
};
