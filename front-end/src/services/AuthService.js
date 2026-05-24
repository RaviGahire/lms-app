import { API } from "./API";

export const AuthService = {

    // register
    usersRegister : (data) => API.post('/users/register',data),

    // login method
    // usersLogin: (data) => API.post('/users',data),

    // forgot-password
    // forgotPassword : (data) => API.put('/users/update ',data)
}