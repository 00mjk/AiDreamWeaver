import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import SendIcon from '@mui/icons-material/Send';

import { Button, Slider, CircularProgress, Alert, AlertTitle, Stack } from '@mui/material';

import { createImg } from '../../actions/imgAction';
import { makeAiImage } from '../../actions/aiAction';

import GenImgItem from '../../components/GenImgItem';
import OptPrompt from '../../components/OptPrompt';
import OptNegPrompt from '../../components/OptNegPrompt';
import OptFilter from '../../components/OptFilter';
import OptImgToImg from '../../components/OptImgToImg';
import OptModel from '../../components/OptModel';
import OptImgDimen from '../../components/OptImgDimen';
import OptPromptGuidance from '../../components/OptPromptGuidance';
import OptQualityDetails from '../../components/OptQualityDetails';
// import OptSeed from '../../components/OptSeed';
// import OptAdvOption from '../../components/OptAdvOption';
import OptImgNum from '../../components/OptImgNum';
// import OptPrivateSession from '../../components/OptPrivateSession';
import OptSuperResolution from '../../components/OptSuperResolution';


const CreatePage = () => {
    // Use Redux
    const dispatch = useDispatch();
    const toCreate = useSelector(state => state.toCreate)
    const aiObj = useSelector(state => state.aiObj)

    // Flags
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("init");
    const [apiCallFlag, setApiCallFlag] = useState("pending");  // Generate Api call state (pending, loading, processing, created)
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

    useEffect(() => {
        setPrompt(aiObj?.settings?.prompt);
        setLoading(aiObj?.loading);
        if (aiObj?.results !== null) {
            setImages(aiObj?.results?.output);
            setStatus(aiObj?.results?.status);
        }
    }, [aiObj])

    useEffect(() => {
        if (toCreate.isTxtToImg) {
            if (toCreate.prompt !== "")
                setPrompt(toCreate.prompt, "toCreate");
        } else {
            if (toCreate.initImg != "")
                setInitImg(toCreate.initImg);
        }
    }, [toCreate]);

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
                console.log("handleGenerateImg - Error");
            });
        } catch (err) {
            console.log("handleGeneratedImg - Err");
        }
    }

    /**
     * @description
     *  Generate and display image items which are created by api.
     */
    const getCreatedImages = () => {
        if (loading)
            return <CircularProgress color='secondary' size={80} disableShrink={true} sx={{ marginTop: '5%' }} />
        if (status === undefined || status === null || status === "init") {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }} >
                    <Alert severity="warning">
                        <AlertTitle>Pending</AlertTitle>
                        Please generate a new image — <strong>Click the Generate button!</strong>
                    </Alert>
                </Stack>
            </>
        } else if (status === "success") {
            return <div id="scroll-container" className="p-10 pt-5 ">
                <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
                        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                            {
                                images.map((url, key) => <GenImgItem key={key} url={url} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        } else if (status === "error") {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Failed — <strong>Try it again!</strong>
                    </Alert>
                </Stack>
            </>
        } else {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Failed — <strong>Try it again!</strong>
                    </Alert>
                </Stack>
            </>
        }
    }

    return <>
        <div className="Layout_layout__main__2GVyJ fixed top-[calc(60px+env(safe-area-inset-top))] bottom-[env(safe-area-inset-bottom)] left-0 right-0 !mt-0 !min-h-0 bg-[#05020E] overflow-y-auto overflow-x-hidden dark-scrollbar select-none test-base lg:text-normal">
            <div className={`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 text-white bg-[#05020E] h-[calc(100vh-62px)] border-t border-white/10 2xl:border-t-0 mx-auto 2xl:border-${!rightSidebar ? "x" : "r"}`}>
                <aside id="left-sidebar" className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                    <div className="px-6 space-y-6">
                        <OptPrompt value={prompt} onChange={(value) => setPrompt(value)} />
                        <OptNegPrompt value={negPrompt} onChange={(value) => setNegPrompt(value)} />
                        <OptFilter />
                        <OptImgToImg
                            img={initImg}
                            strength={strength}
                            onSetStrength={(value) => setStrength(value)}
                            onSetInitImg={(value) => setInitImg(value)}
                        />
                        <OptSuperResolution onChange={(value => setSuperRes(value))} />
                    </div>
                    <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                        <Button variant="outlined" endIcon={<SendIcon />} onClick={handleGenerateImg}>Generate</Button>
                    </div>
                    {/* {
                        images.length > 0 &&
                        <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                            <Button variant="outlined" endIcon={<BrushOutlinedIcon />} onClick={handlePrintShirt}>Print on T-Shirt</Button>
                        </div>
                    } */}
                </aside>
                <main className={`${!rightSidebar ? "xl:col-span-3 lg:col-span-2" : "xl:col-span-4 lg:col-span-3"} lg:overflow-y-auto lg:overflow-x-hidden border-x border-white/10 relative`}>
                    <button aria-label="Toggle sidebar" className="absolute hidden lg:flex items-center justify-center -right-4 top-20 z-30 bg-gray-95 rounded-l-full w-10 h-12 pr-2 border-l border-white/10 "
                        onClick={() => setRightSidebar(!rightSidebar)}>
                        {!rightSidebar ? <ChevronRightOutlinedIcon fontSize='small' /> : <ChevronLeftOutlinedIcon fontSize='small' />}
                    </button>
                    <div className="relative w-full h-full" id="draggable-bounds">
                        <div className="sticky m-0 px-0 py-5 flex items-center justify-center top-0 z-[5] bg-[#05020E] border-b border-white/10 pl-4">
                            <div className="flex items-center">
                                <label htmlFor="import" className="cursor-pointer text-purple-primary text-[0.7rem] font-bold uppercase">+ Import
                                    Image</label>
                                <input type="file" name="import" id="import" accept="image/png, image/jpeg, image/svg+xml, image/webp, image/bmp, image/gif" className="opacity-0 pointer-events-none w-0 h-0" />
                            </div>
                            <div className="w-1/4 min-w-[250px] content-right ml-auto mr-10">
                                <fieldset className="create-fieldset">
                                    <div id="slider-Columns" className="flex items-center gap-x-4 slider-container">
                                        <label htmlFor="range-slider-Columns" className="text-sm text-gray-400">Columns</label>
                                        <Slider
                                            size="small"
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            color="secondary"
                                            value={columns}
                                            min={1}
                                            max={6}
                                            onChange={(e) => setColumns(e.target.value)}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {getCreatedImages()}
                    </div>
                </main>
                <aside className={`lg:overflow-y-auto relative z-20 transition-all ${!rightSidebar ? '' : 'hidden'} `}>
                    <div className="px-6 divide-y divide-white/10">
                        <OptModel onChange={(modelId) => setModelId(modelId)} />
                        <div className="flex flex-col gap-y-8 py-8">
                            <OptImgDimen onChgWidth={val => setWidth(val)} onChgHeight={val => setHeight(val)} />
                            <OptPromptGuidance value={guidanceScale} onChange={(val) => setGuidanceScale(val)} />
                            <OptQualityDetails value={genVariants} onChange={(val) => setGenVariants(val)} />
                        </div>
                        {/* <div className="flex flex-col gap-y-4 py-8 ">
                            <OptSeed />
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <OptAdvOption />
                        </div> */}
                        <OptImgNum onChange={val => setImgNum(val)} />
                        {/* <div className="flex flex-col gap-y-4 py-8">
                                <OptPrivateSession />
                            </div> */}
                    </div>
                </aside>
            </div>
        </div>
    </>
}

export default CreatePage;