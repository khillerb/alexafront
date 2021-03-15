import axios from 'axios';
const endpoint = 'https://52.254.93.227:8443/api/responses/';

export default {
    updateResponse,
    getResponses,
    getResponseById,
    getResponsesByType,
    getResponsesByUserGroup,
    createResponse    
}
function getResponses () {
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
function getResponseById (id) {
    const options = {
        url: endpoint + `${id}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then(response => {
        return response;
    }, (error) => {
        console.log(error);
    });
}
function getResponsesByUserGroup (group) {
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
function getResponsesByType (type) {
    const options = {
        url: endpoint + `byType/${type}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return axios(options).then();
}
function createResponse(formData) {
    const options = {
        url: endpoint,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: formData
    };
    return axios(options).then();
}
function updateResponse(form) {
    const options = {
        url: endpoint + form.id,
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: form
    };
    return axios(options).then();
}
