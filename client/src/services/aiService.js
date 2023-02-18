import axios from "axios";

export default class AiService {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_CORS_HEADER + `https://stablediffusionapi.com/api/v3/dreambooth`
        });

        this.supResSvc = axios.create({
            baseURL: process.env.REACT_APP_CORS_HEADER + `https://stablediffusionapi.com/api/v3/super_resolution`
        });
    }

    /**
     * @description
     *  Generate image by ai (both txt2txt and img2txt)
     * @params
     *  type(String): txt2img or img2img flag
     *  settings(Arr):  api parameters
     */
    makeImg = (type, settings) => {
        return new Promise((resolve, reject) => {
            if (type === "txt2img") {
                this.service.post('', settings).then(res => {
                    console.log("TXT2IMG_CREATED");
                    resolve(res.data)
                }).catch(err => {
                    console.log("TXT2IMG_FAILED");
                    reject(err)
                });
            } else {
                this.service.post('/img2img', settings).then(res => {
                    console.log("IMG2IMG_CREATED");
                    resolve(res.data)
                }).catch(err => {
                    console.log("IMG2IMG_FAILED");
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