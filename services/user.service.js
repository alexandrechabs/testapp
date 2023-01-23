import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import { getBaseUrl, getApiRoot } from "nextjs-url";

import { fetchWrapper } from 'helpers';
import { toast } from 'react-hot-toast';

// const { publicRuntimeConfig } = getConfig();
// const baseUrl = `${getApiRoot().href}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.post(`${baseUrl}/users/authenticate`, { username, password })
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
} 

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    toast.success('Déconnexion réussie');
    Router.push('/login');
}

function register(user) {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.post(`${baseUrl}/users/register`, user);
}

function getAll() {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.get(`${baseUrl}/users`);
}

function getById(id) {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.get(`${baseUrl}/users/${id}`);
}

function update(id, params) {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.put(`${baseUrl}/users/${id}`, params)
        .then(x => {
            // update stored user if the logged in user updated their own record
            if (id === userSubject.value.id) {
                // update local storage
                const user = { ...userSubject.value, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                userSubject.next(user);
            }
            return x;
        });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    const baseUrl = getApiRoot().href;
    return fetchWrapper.delete(`${baseUrl}/users/${id}`);
}