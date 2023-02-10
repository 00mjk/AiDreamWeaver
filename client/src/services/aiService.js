import axios from "axios";

export default class AiService {
    constructor() {
        this.txtService = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/dreambooth`
        });

        this.imgService = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/dreambooth/img2img`
        });

        this.supResSvc = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/super_resolution`
        });
    }

    /**
     * @description
     *  Generate image by ai (both txt2txt and img2txt)
     */
    makeImg = (settings) => {
        return new Promise((resolve, reject) => {
            console.log("IMG_A");
            if (typeof settings.init_image === 'string' && settings.init_image === "") {
                this.txtService.post('', settings).then(res => {
                    console.log("IMG_CREATED");
                    resolve(res.data)
                }).catch(err => {
                    console.log("IMG_FAILED");
                    reject(err)
                });
            } else {
                this.imgService.post('', settings).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                });
            }
        })
    }

    /**
     * @description
     *  Make super resolution image. 
     * @params
     *  key : Your API Key
     *  url : Image Url you want you want to super resolution for
     *  scale : Scale number
     *  webhook : webhook to call when image generation is completed
     *  face_enhance : boolean (true/false) for face enhancement feature
     */
    superResolution = (params) => {
        return new Promise((resolve, reject) => {
            this.supResSvc.post('', params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}