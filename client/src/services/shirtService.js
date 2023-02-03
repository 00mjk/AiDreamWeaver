import axios from 'axios';

export default class ShirtService {
    constructor() {
        this.createSvc = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://api.printful.com/mockup-generator/create-task/`,
            headers: {
              'Content-Type': 'application/json'
            }
        });
        this.createSvc.defaults.headers.common['Authorization'] = 'Bearer lK0x36vzVMZBbt3BlpDLtSAIy1ipACWxWCKqKbBC';

        this.getSvc = axios.create({
            baseURL: `https://cors-anywhere.herokuapp.com/https://api.printful.com/mockup-generator/task`
        });
        this.getSvc.defaults.headers.common['Authorization'] = 'Bearer lK0x36vzVMZBbt3BlpDLtSAIy1ipACWxWCKqKbBC';

    }

    createTShirt = (shirtId, images) => {
        return new Promise((resolve, reject) => {
            this.createSvc.post(('' + shirtId), {
                "variant_ids": [4012, 4013, 4014, 4017, 4018, 4019],
                "format": "jpg",
                "files": [
                    {
                        "placement": "front",
                        "image_url": images[0],
                        "position": {
                            "area_width": 1800,
                            "area_height": 2400,
                            "width": 1800,
                            "height": 1800,
                            "top": 300,
                            "left": 0
                        }
                    },
                    {
                        "placement": "back",
                        "image_url": images[0],
                        "position": {
                            "area_width": 1800,
                            "area_height": 2400,
                            "width": 1800,
                            "height": 1800,
                            "top": 300,
                            "left": 0
                        }
                    }
                ]
            })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }

    getTShirt = (taskKey) => {
        return new Promise((resolve, reject) => {
            this.getSvc.get(`?task_key=` + taskKey)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}