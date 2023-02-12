import axios from 'axios';
import store from '../store';

class RevolutService {
    constructor() {
        this.service = axios.create({
            // baseURL: `${process.env.SERVER_URL}/users`
            baseURL: `https://cors-anywhere.herokuapp.com/https://merchant.revolut.com/api/1.0`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk_-vCcHJ7djy9jPfeCmkLi256M8VxsHeTUXh6Z0MoMOFTYSTbaNE97zgYFg8u3JZbT'
            }
        });
    }

    createOrder = (data) => {
        return new Promise((resolve, reject) => {
            this.service.post('/orders', data).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

const service = new RevolutService();

export default service;