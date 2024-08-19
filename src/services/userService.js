import axios from '../axios'
const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (idUser) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: idUser
        }
    })
}

const editUserService = (data) => {
    return axios.put('/api/edit-user', data)
}
export {
    handleLogin,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService
}