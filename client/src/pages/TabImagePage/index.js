import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { createImg } from '../../actions/imgAction';
import { makeAiImage } from '../../actions/aiAction';
import OptTextarea from '../../components/OptTextarea';
import ColorButton from '../../components/ColorButton';
import OptFilter from '../../components/OptFilter';
import ResultImgItem from '../../components/ResultImgItem';
import OptSlider from '../../components/OptSlider';
import { primaryBackColor, secondaryBackColor, primaryBtnColor } from '../../stylesheets/colors';
import "./tabimage.scss";
import TopLabelSwitch from '../../components/TopLabelSwitch';
import OptFilterItem from '../../components/OptFilterItem';

const TabImagePage = (props) => {
    // Use Redux
    const dispatch = useDispatch();
    const toCreate = useSelector(state => state.toCreate)
    const aiObj = useSelector(state => state.aiObj)
    const auth = useSelector(state => state.auth);

    // Flags
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("init");
    const [rightSidebar, setRightSidebar] = useState(false);    // Right sidebar state
    const [columns, setColumns] = useState(1);                  // Colum count to show image.

    const [images, setImages] = useState([]);                   // Generated Images
    const [modelId, setModelId] = useState("stable-diffu");     // Model Id
    const [prompt, setPrompt] = useState("");                   // Prompt
    const [negPrompt, setNegPrompt] = useState("");             // Remove From Image
    const [initImg, setInitImg] = useState("");                 // Init Image (Link of initial image)
    const [superRes, setSuperRes] = useState(0);                // Super Resolution
    const [maskImg, setMaskImg] = useState(0);                  // Mask Image (Link of mask image for inpainting)
    const [strength, setStrength] = useState(70);               // Prompt Strength (Prompt strength when using init image)
    const [width, setWidth] = useState(512);                    // Image Dimensions - Width
    const [height, setHeight] = useState(512);                  // Image Dimensions - Height
    const [genVariants, setGenVariants] = useState(25);         // Quality & Details
    const [guidanceScale, setGuidanceScale] = useState(9);      // Prmpt Guidance
    const [imgNum, setImgNum] = useState(1);                    // Number of Images
    const [seed, setSeed] = useState(null);
    const [webhook, setWebhook] = useState(null);
    const [trackId, setTrackerId] = useState(null);

    /**
     * @description
     *  Generate image using api (prompt, batchId, width, height ...)
     */
    const handleGenerateImg = () => {
        console.log("--- handleGenerateImg --- ", prompt);

        try {
            const settings = {
                "key": "iIjvdXCYHvVOuemfFgGH9JXSsVwl3grN7ZPtGGGAxY1g32kayxq1SVB3s08A",
                "prompt": prompt,
                "model_id": modelId,
                "samples": imgNum,
                "negative_prompt": negPrompt,
                "init_image": initImg,
                "mask_image": maskImg,
                "width": width,
                "height": height,
                "prompt_strength": (strength / 100),
                "num_inference_steps": genVariants,
                "guidance_scale": guidanceScale,
                "enhance_prompt": "yes",
                "seed": seed,
                "webhook": webhook,
                "track_id": trackId
            };

            dispatch(makeAiImage(settings)).then(res => {
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

    return <>
        <div id="image-studio-container">
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
                    <OptSlider
                        min={1}
                        max={30}
                        label={`Image Strength`}
                        description={``}
                        value={guidanceScale}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx == 1 || auth?.user?.role_idx == 2) ? false : true}
                        onChange={(val) => setGuidanceScale(val)}
                    />
                    <OptTextarea
                        labelfor={`prompt-textarea`}
                        label={`Prompt`}
                        placeholder={`Text to Image`}
                        description={`What do you want to see? You can use a single word or a full sentence.`}
                        minHeight={100}
                        value={prompt}
                        onChange={(value) => setPrompt(value)}
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
                    {/* <OptImgToImg
                            img={initImg}
                            strength={strength}
                            onSetStrength={(value) => setStrength(value)}
                            onSetInitImg={(value) => setInitImg(value)}
                        /> */}
                </div>
                {/* <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]"> */}
                <div className="field-button">
                    {/* <Button variant="contained" endIcon={<SendIcon />} onClick={handleGenerateImg}>Generate Image</Button> */}

                    <ColorButton variant="contained" name={`Genereate Image`} handle={() => handleGenerateImg()} />
                </div>
            </aside>
            <main className='main-content'>
                <div className="draggable-bounds">
                    <div className="top-toolbar">
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

export default TabImagePage;