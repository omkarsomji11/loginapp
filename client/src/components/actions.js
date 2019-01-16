import axios from 'axios'

export const register = user => {
    return axios
        .post('users/register', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
        })
        .then(res => {
            console.log('Yo man its working');
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}

