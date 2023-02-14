import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { createImg } from '../../actions/imgAction';
import { makeAiImage, setSetting } from '../../actions/aiAction';
import OptTextarea from '../../components/OptTextarea';
import ColorButton from '../../components/ColorButton';
import OptFilter from '../../components/OptFilter';
import OptFilterItem from '../../components/OptFilterItem';
import ResultImgItem from '../../components/ResultImgItem';
import TopLabelSwitch from '../../components/TopLabelSwitch';
import "./tabprompt.scss";

const TabPromptPage = (props) => {
    // Use Redux
    const dispatch = useDispatch();
    // const toCreate = useSelector(state => state.toCreate)
    const aiObj = useSelector(state => state.aiObj)
    const auth = useSelector(state => state.auth);

    // Flags
    const [loading, setLoading] = useState(false);

    const [columns, setColumns] = useState(1);                  // Colum count to show image.
    const [prompt, setPrompt] = useState("");                   // Prompt
    const [negPrompt, setNegPrompt] = useState("");             // Remove From Image
    const [filter, setFilter] = useState(null);                 // Style
    // const [modelId, setModelId] = useState("stable-diffu");     // Model Id
    // const [initImg, setInitImg] = useState("");                 // Init Image (Link of initial image)
    // const [maskImg, setMaskImg] = useState("");                 // Mask Image (Link of mask image for inpainting)
    // const [width, setWidth] = useState(512);                    // Image Dimensions - Width
    // const [height, setHeight] = useState(512);                  // Image Dimensions - Height
    // const [strength, setStrength] = useState(0.7);               // Prompt Strength (Prompt strength when using init image)
    // const [numInfSteps, setNumInfSteps] = useState(30);
    // const [guidanceScale, setGuidanceScale] = useState(7.5);
    // const [safetyChecker, setSafetyChecker] = useState("yes");
    // const [seed, setSeed] = useState(null);
    // const [webhook, setWebhook] = useState(null);
    // const [trackId, setTrackerId] = useState(null);
    const [images, setImages] = useState([]);                   // Generated Image Objects

    // Effect
    useEffect(() => {
        setColumns(aiObj.settings.columns);
        setPrompt(aiObj.settings.prompt);
        setNegPrompt(aiObj.settings.negative_prompt);
        setFilter(aiObj.settings.filter);
        setImages(aiObj.results);
        // setModelId(aiObj.settings.model_id);
        // setInitImg(aiObj.settings.init_image);
        // setMaskImg(aiObj.settings.mask_image);
        // setWidth(aiObj, settings.width);
        // setHeight(aiObj.settings.height);
        // setStrength(aiObj.settings.strength);
        // setNumInfSteps(aiObj.settings.num_inference_steps);
        // setGuidanceScale(aiObj.settings.guidance_scale);
        // setSafetyChecker(aiObj.settings.safety_checker);
        // setSeed(aiObj.settings.seed);
        // setWebhook(aiObj.settings.webhook);
        // setTrackerId(aiObj.settings.track_id);
    }, [aiObj]);

    /**
     * @description
     *  Generate image using DREAMBOOTH API
     */
    const handleGenerateImg = () => {
        console.log("--- handleGenerateImg --- ", prompt, negPrompt);

        try {
            const settings = {
                "key": aiObj.settings.key,
                "prompt": prompt,
                "model_id": aiObj.settings.model_id,
                "samples": aiObj.settings.samples,
                "negative_prompt": negPrompt,
                "init_image": aiObj.settings.init_image,
                "mask_image": aiObj.settings.mask_image,
                "width": aiObj.settings.width,
                "height": aiObj.settings.height,
                "prompt_strength": aiObj.settings.strength,
                "num_inference_steps": aiObj.settings.num_inference_steps,
                "guidance_scale": aiObj.settings.guidance_scale,
                "safety_checker": aiObj.settings.safety_checker,
                "seed": aiObj.settings.seed,
                "webhook": aiObj.settings.webhook,
                "track_id": aiObj.settings.track_id
            };

            dispatch(makeAiImage("txt2img", settings)).then(res => {
                // Save data in serer.
                const imgData = {
                    images: res.output,
                    settings: settings
                };
                dispatch(createImg(imgData)).then(() => {
                    console.log("Image created in db.");
                });
            }).catch(err => {
                console.log("makeAiImage - Error", err);
            });
        } catch (err) {
            console.log("handleGeneratedImg - Err", err);
        }
    }

    /**
     * @description
     *  Set prompt to state and store.
     * @param {String} prompt 
     */
    const handlechgPrompt = (value) => {
        setPrompt(value);
        dispatch(setSetting({
            key: "prompt",
            value: value
        }));
    }

    return <>
        <div id="prompt-studio-container">
            <aside className="left-sidebar">
                <div className="px-6 space-y-6">
                    <fieldset style={{ display: 'flex' }}>
                        <div style={{ flexGrow: 1 }} >
                            <TopLabelSwitch />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <OptFilter />
                        </div>
                    </fieldset>
                    <OptTextarea
                        labelfor={`prompt-textarea`}
                        label={`Prompt`}
                        placeholder={`Text to Image`}
                        description={`What do you want to see? You can use a single word or a full sentence.`}
                        minHeight={100}
                        value={prompt}
                        onChange={(value) => handlechgPrompt(value)}
                    />
                    <OptTextarea
                        labelfor={`negative-prompt-textarea`}
                        label={`Remove From Image`}
                        placeholder={`goldfish, pink, blurry`}
                        description={`Describe details you don't want in your image like color, objects, or a scenery.`}
                        minHeight={100}
                        value={negPrompt}
                        onChange={(value) => setNegPrompt(value)}
                    />
                </div>
                <div className="field-button">
                    <ColorButton variant="contained" name={`Genereate Image`} handle={() => handleGenerateImg()} />
                </div>
            </aside>
            <main className='main-content'>
                <div className="draggable-bounds">
                    <div className="top-toolbar">
                        <div className='filter-box'>
                            <div className='scroll-bar'>
                                {
                                    filters.map((filter, key) => (
                                        <OptFilterItem
                                            title={filter.title}
                                            active={filter.state}
                                            img={filter.image}
                                            key={key}
                                            onClick={() => window.alert(key)} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="scroll-container">
                        <div className='scroll-container-outbox'>
                            <div className='scroll-container-inbox'>
                                <div className="grid-box" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                                    <ResultImgItem url={`https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/b503c36f-1aad-4e2c-a4ec-90c063c8691c-0.png?w=248&fit=crop&auto=format`} />
                                    <ResultImgItem url={`https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/b503c36f-1aad-4e2c-a4ec-90c063c8691c-0.png?w=248&fit=crop&auto=format`} />
                                    {

                                        // images.map((url, key) => <ResultImgItem key={key} url={url} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
}

const filters = [{
    title: "None",
    image: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
    prompt: "",
    state: true
}, {
    title: "Colorpop",
    image: "https://storage.googleapis.com/pai-marketing/filters/elizaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Instaport",
    image: "https://storage.googleapis.com/pai-marketing/filters/instaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Playtoon",
    image: "https://storage.googleapis.com/pai-marketing/filters/pltn-style.png",
    prompt: "",
    state: false
}, {
    title: "Woolitize",
    image: "https://storage.googleapis.com/pai-marketing/filters/woolitize.jpeg",
    prompt: "",
    state: false
}, {
    title: "App Icons",
    image: "https://storage.googleapis.com/pai-marketing/filters/appicon-style.jpg",
    prompt: "",
    state: false
}, {
    title: "Retro Futurism",
    image: "https://storage.googleapis.com/pai-marketing/filters/retrofuturism.png",
    prompt: "",
    state: false
}, {
    title: "Origamip",
    image: "https://storage.googleapis.com/pai-marketing/filters/origami.png",
    prompt: "",
    state: false
}, {
    title: "Black and white",
    image: "https://storage.googleapis.com/pai-marketing/filters/haze.png",
    prompt: "",
    state: false
}, {
    title: "None",
    image: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
    prompt: "",
    state: true
}, {
    title: "Colorpop",
    image: "https://storage.googleapis.com/pai-marketing/filters/elizaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Instaport",
    image: "https://storage.googleapis.com/pai-marketing/filters/instaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Playtoon",
    image: "https://storage.googleapis.com/pai-marketing/filters/pltn-style.png",
    prompt: "",
    state: false
}, {
    title: "Woolitize",
    image: "https://storage.googleapis.com/pai-marketing/filters/woolitize.jpeg",
    prompt: "",
    state: false
}, {
    title: "App Icons",
    image: "https://storage.googleapis.com/pai-marketing/filters/appicon-style.jpg",
    prompt: "",
    state: false
}, {
    title: "Retro Futurism",
    image: "https://storage.googleapis.com/pai-marketing/filters/retrofuturism.png",
    prompt: "",
    state: false
}, {
    title: "Origamip",
    image: "https://storage.googleapis.com/pai-marketing/filters/origami.png",
    prompt: "",
    state: false
}, {
    title: "Black and white",
    image: "https://storage.googleapis.com/pai-marketing/filters/haze.png",
    prompt: "",
    state: false
}];

export default TabPromptPage;