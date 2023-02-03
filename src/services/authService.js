import axios from 'axios';

export default class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.SERVER_URL}/auth`,
            withCredentials: true
        });
    }

    signin = (uid, pwd) => {
        return this.service.post('/signin', { uid, pwd })
            .then(res => res.data)
            .catch(err => console.log(err));
    }

    signup = (uid, pwd) => {
        return this.service.post('/singup', { uid, pwd })
            .then(res => res.data)
            .catch(err => console.log(err))
    }

    logout = () => {
        return this.service.get('/logout')
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
    }
}