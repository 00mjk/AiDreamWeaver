import {
    AI_MAKE_IMG_START,
    AI_MAKE_IMG_SUCCESS,
    AI_MAKE_IMG_FAILED,
    AI_MAKE_IMG_ERROR,
    AI_SET_SETTING
} from "../actions/config";

const initialState = {
    loading: false,
    settings: {
        key: "iIjvdXCYHvVOuemfFgGH9JXSsVwl3grN7ZPtGGGAxY1g32kayxq1SVB3s08A",            // Your API Key
        columns: 1,                     // Avatar Display nums.
        prompt: "",                     // Your Prompt
        model_id: "stable-diffu",       // public or your trained Model id
        samples: 1,                     // number of images you want in response
        negative_prompt: "",            // Items you don't want in the image
        filter: null,                   // Style (None, Colorpop, Black&white ...), Fields(_id, avatar, name, prompt))
        init_image: "",                 // link of Initial Image
        mask_image: "",                 // link of mask image for inpainting
        width: 512,                     // Width of output image. Maximum size is 1024x768 or 768x1024 because of memory limits
        height: 512,                    // Height of output image. Maximum size is 1024x768 or 768x1024 because of memory limits
        strength: 0.7,                  // Prompt strength when using init image. 1.0 corresponds to full destruction of information in init image
        num_inference_steps: 30,        // Number of denoising steps (minimum: 1; maximum: 50)
        guidance_scale: 7.5,            // Scale for classifier-free guidance (minimum: 1; maximum: 20)
        safety_checker: "yes",          // Enhance prompts for better results, default : yes, option : yes/no
        seed: null,                     // Random seed. Leave blank to randomize the seed
        webhook: null,                  // webhook to call when image generation is completed
        track_id: null                  // tracking id to track this api call
    },
    models: [{
        model_name: 'Stable Diffusion v1.5',
        model_value: 'stable-diffu'
    }, {
        model_name: 'Stable Diffusion v2',
        model_value: 'stable-diffu'
    }, {
        model_name: 'Stable Diffusion v3',
        model_value: 'stable-diffu'
    }, {
        model_name: 'MidJourney v4',
        model_value: 'midjourney'
    }, {
        model_name: 'Protogen x3.4',
        model_value: 'protogen-3.4'
    }, {
        model_name: 'Realistic Vision v1.3',
        model_value: 'realistic-vision-v13'
    }, {
        model_name: 'Project Unreal Engine 5',
        model_value: 'project-unreal-engin'
    }, {
        model_name: 'T-shirt print designs',
        model_value: 't-shirt-prin'
    }, {
        model_name: 'Anything v4',
        model_value: 'anything-v4'
    }, {
        model_name: 'Dream Shaper',
        model_value: 'dream-shaper-8797'
    }, {
        model_name: 'Vintedois',
        model_value: 'vintedois-diffusion'
    }, {
        model_name: 'F222',
        model_value: 'f222-diffusion'
    }, {
        model_name: 'animefull2',
        model_value: 'animefull2'
    }],
    styles: [{
        name: "None",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
        prompt: ""
    }, {
        name: "Colorpop",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/elizaport_style.png",
        prompt: ""
    }, {
        name: "Instaport",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/instaport_style.png",
        prompt: ""
    }, {
        name: "Playtoon",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/pltn-style.png",
        prompt: ""
    }, {
        name: "Woolitize",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/woolitize.jpeg",
        prompt: ""
    }, {
        name: "App Icons",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/appicon-style.jpg",
        prompt: ""
    }, {
        name: "Retro Futurism",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/retrofuturism.png",
        prompt: ""
    }, {
        name: "Origamip",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/origami.png",
        prompt: ""
    }, {
        name: "Black and white",
        avatar: "https://storage.googleapis.com/pai-marketing/filters/haze.png",
        prompt: ""
    }],                         // Styles (_id, avatar, name, prompt)
    result: null,                      // AI Image Generator Result (Image Objects) 
    error: "",                          // Error Message
};

export default function aiReducer(state = initialState, action) {
    switch (action.type) {
        case AI_SET_SETTING:
            const key = action.data.setting.key;
            const value = action.data.setting.value;
            return {
                ...state,
                settings: {
                    ...state.settings,
                    prompt: value
                }
            }
        case AI_MAKE_IMG_START:
            console.log("AI_MAKE_IMG_START");
            return {
                ...state,
                loading: true,
                result: null
            }
        case AI_MAKE_IMG_SUCCESS:
            console.log("AI_MAKE_IMG_SUCCESS");
            return {
                ...state,
                loading: false,
                result: action?.data?.res
            }
        case AI_MAKE_IMG_FAILED:
            console.log("AI_MAKE_IMG_FAILED");
            return {
                ...state,
                loading: false,
                result: action?.data?.res,
                error: action?.data?.errMsg
            }
        case AI_MAKE_IMG_ERROR:
            console.log("AI_MAKE_IMG_ERROR");
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}