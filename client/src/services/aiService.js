import axios from "axios";

export default class AiService {
    constructor() {
        this.txtService = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/text2img`
        });

        this.imgService = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/img2img`
        });
    }

    makeImg = (params) => {
        return new Promise((resolve, reject) => {
            if (typeof params.init_image === 'string' && params.init_image === "") {
                this.txtService.post('', params)
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        reject(err)
                    });
            } else {
                this.imgService.post('', params)
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        reject(err)
                    });
            }
        })
    }
}