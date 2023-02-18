import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Alert, Stack, AlertTitle } from '@mui/material';

import { createImg } from '../../actions/imgAction';
import { makeAiImage } from '../../actions/aiAction';
import { AI_MAKE_IMG_START, AI_MAKE_IMG_SUCCESS, AI_MAKE_IMG_FAILED, AI_MAKE_IMG_ERROR, AI_MAKE_IMG_INIT } from '../../actions/config';
import OptTextarea from '../../components/OptTextarea';
import ColorButton from '../../components/ColorButton';
import OptFilter from '../../components/OptFilter';
import OptFilterItem from '../../components/OptFilterItem';
import ResultImgItem from '../../components/ResultImgItem';
import TopLabelSwitch from '../../components/TopLabelSwitch';
import PendingImgItem from '../../components/PendingImgItem';
import "./tabprompt.scss";

const TabPromptPage = (props) => {
    // Props
    const { setting, setSetting, setLoading, aiState, setAiState } = props;

    // Use Redux
    const dispatch = useDispatch();
    const aiObj = useSelector(state => state.aiObj);
    const imgObj = useSelector(state => state.img);

    // States
    const [recentImages, setRecentImages] = useState([]);                   // Generated Image Objects
    const [isRecentImgState, setisRecentImgState] = useState(false);
    const [styleState, setStyleState] = useState(false);            // Style Option State
    const [styleBoxState, setStyleBoxState] = useState(false);      // Style Box State

    useEffect(() => {
        setRecentImages(imgObj.recentImages);
    }, [imgObj.recentImages]);

    /**
     * @description
     *  Generate image using DREAMBOOTH API
     */
    const handleGenerateImg = () => {
        console.log("--- handleGenerateImg --- ", setting.prompt, setting.negative_prompt);
        const newPrompt = styleState ? (setting.prompt + (setting.filter.prompt ? ', ' + setting.filter.prompt : '')) : setting.prompt;

        try {
            setAiState(AI_MAKE_IMG_START);
            setLoading(true);

            const settings = {
                "key": setting.key,
                "prompt": newPrompt,
                "model_id": setting.model_id,
                "samples": setting.samples,
                "negative_prompt": setting.negative_prompt,
                "init_image": setting.init_image,
                "mask_image": setting.mask_image,
                "width": setting.width,
                "height": setting.height,
                "prompt_strength": setting.strength,
                "num_inference_steps": setting.num_inference_steps,
                "guidance_scale": setting.guidance_scale,
                "safety_checker": setting.safety_checker,
                "seed": setting.seed,
                "webhook": setting.webhook,
                "track_id": setting.track_id
            };

            dispatch(makeAiImage("txt2img", settings)).then(res => {
                // Save data in serer.
                const imgData = {
                    images: res.output,
                    settings: settings
                };
                dispatch(createImg(imgData)).then(() => {
                    console.log("Image created in db.");
                    setAiState(AI_MAKE_IMG_SUCCESS);
                }).catch(err => {
                    setAiState(AI_MAKE_IMG_FAILED);
                });
                setLoading(false);
            }).catch(err => {
                console.log("makeAiImage - Error", err);
                setLoading(false);
                setAiState(AI_MAKE_IMG_FAILED);
            });
        } catch (err) {
            console.log("handleGeneratedImg - Err", err);
            setLoading(false);
            setAiState(AI_MAKE_IMG_FAILED);
        }
    }

    /**
     * @description
     *  Change image state
     */
    const handleChgImage = (image) => {
        var tmpRecentImgs = recentImages;
        var len = tmpRecentImgs.length;

        for (var i = 0; i < len; i++) {
            if (tmpRecentImgs[i]._id === image._id)
                tmpRecentImgs[i] = image;
        }
        setRecentImages(tmpRecentImgs);
        setisRecentImgState(!isRecentImgState);
    }

    return <>
        <div id="prompt-studio-container">
            <aside className="left-sidebar">
                <div className="px-6 space-y-6">
                    <fieldset style={{ display: 'flex' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TopLabelSwitch checked={styleState} onChecked={checked => setStyleState(checked)} />
                            </Grid>
                            <Grid item xs={8}>
                                {
                                    styleState &&
                                    <OptFilter
                                        title={setting.filter?.name}
                                        img={setting.filter?.avatar}
                                        opened={styleBoxState}
                                        handleClick={(opened) => setStyleBoxState(opened)}
                                    />
                                }
                            </Grid>
                        </Grid>
                    </fieldset>
                    <OptTextarea
                        labelfor={`prompt-textarea`}
                        label={`Prompt`}
                        placeholder={`Text to Image`}
                        description={`What do you want to see? You can use a single word or a full sentence.`}
                        minHeight={100}
                        value={setting.prompt}
                        onChange={(value) => setSetting({ key: "prompt", value: value })}
                    />
                    <OptTextarea
                        labelfor={`negative-prompt-textarea`}
                        label={`Remove From Image`}
                        placeholder={`goldfish, pink, blurry`}
                        description={`Describe details you don't want in your image like color, objects, or a scenery.`}
                        minHeight={100}
                        value={setting.negative_prompt}
                        onChange={(value) => setSetting({ key: "negative_prompt", value: value })}
                    />
                </div>
                <div className="field-button">
                    <ColorButton variant="contained" name={`Genereate Image`} handle={() => handleGenerateImg()} />
                </div>
            </aside>
            <main className='main-content'>
                <div className="draggable-bounds">
                    <div className="top-toolbar">
                        {
                            styleState && styleBoxState &&
                            <div className='filter-box'>
                                <div className='scroll-bar'>
                                    {
                                        aiObj.styles.map((item, key) => (
                                            <OptFilterItem
                                                title={item.name}
                                                active={setting.filter._id === item._id ? true : false}
                                                img={item.avatar}
                                                key={key}
                                                handleClick={() => setSetting({ key: "filter", value: item })}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className="scroll-container">
                        <div className='scroll-container-outbox'>
                            <div className='scroll-container-inbox'>
                                <div className="grid-box" style={{ gridTemplateColumns: `repeat(${setting.columns}, minmax(0px, 1fr))` }}>
                                    {
                                        aiState === AI_MAKE_IMG_INIT &&
                                        <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                                            <Alert severity="info">
                                                <AlertTitle>TEXT TO IMAGE</AlertTitle>
                                                Press <strong>Generate</strong> button!
                                            </Alert>
                                        </Stack>
                                    }
                                    {
                                        aiState === AI_MAKE_IMG_START && <PendingImgItem />
                                    }
                                    {
                                        aiState === AI_MAKE_IMG_SUCCESS &&
                                        recentImages.map((image, key) => <ResultImgItem url={image.url} image={image} changeImg={image => handleChgImage(image)} key={key} />)
                                    }
                                    {
                                        aiState === AI_MAKE_IMG_FAILED &&
                                        <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                Generating image is field. — <strong>Try it again!</strong>
                                            </Alert>
                                        </Stack>
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

export default TabPromptPage;