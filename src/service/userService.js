import axios from 'axios';
const endpoint = 'http://52.254.93.227:8080/api/user/';

export default {
    getUsers,
    getUsersByEmail,
    getUsersByGroup,
    getUsersByName,
    getUsersById,
    createUser,
    updateUser
};
function getUsers(){
    const options = {
        url: endpoint,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then();
}
function getUsersByEmail(email){ 
    const options = {
        url: endpoint + "byEmail",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            email : email
        }
    };
    return axios(options).then();
}
function getUsersById(id){
    const options = {
        url: endpoint + `byId/${id}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then();
}
function getUsersByGroup(group){
    const options = {
        url: endpoint + `byGroup/${group}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then();
}
function getUsersByName(fname,lname){
    const options = {
        url: endpoint + `byName/${fname}/${lname}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then();
}
function createUser(formData) {
    const options = {
        url: endpoint,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: formData
    };
    return axios(options).then(response => {
        return response;
    }, (error) => {
        console.log(error);
    });
}
function updateUser(formData) {
    const options = {
        url: endpoint + `${formData.id}`,
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: formData
    };
    return axios(options).then(response => {
        return response;
    }, (error) => {
        console.log(error);
    });
}