import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@mui/material';

import { createImg } from '../../actions/imgAction';
import { makeAiImage } from '../../actions/aiAction';
import OptTextarea from '../../components/OptTextarea';
import ColorButton from '../../components/ColorButton';
import OptFilter from '../../components/OptFilter';
import OptFilterItem from '../../components/OptFilterItem';
import ResultImgItem from '../../components/ResultImgItem';
import TopLabelSwitch from '../../components/TopLabelSwitch';
import "./tabprompt.scss";

const TabPromptPage = (props) => {
    // Props
    const { setting, setSetting } = props;

    // Use Redux
    const dispatch = useDispatch();
    const aiObj = useSelector(state => state.aiObj);

    // States
    const [result, setResult] = useState(null);                   // Generated Image Objects
    const [styleState, setStyleState] = useState(false);            // Style Option State
    const [styleBoxState, setStyleBoxState] = useState(false);      // Style Box State

    useEffect(() => {
        setResult(aiObj.result);
    }, [aiObj.result]);

    /**
     * @description
     *  Generate image using DREAMBOOTH API
     */
    const handleGenerateImg = () => {
        console.log("--- handleGenerateImg --- ", setting.prompt, setting.negative_prompt);
        const newPrompt = styleState ? (setting.prompt + (setting.filter.prompt ? ', ' + setting.filter.prompt : '')) : setting.prompt;

        try {
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
                });
            }).catch(err => {
                console.log("makeAiImage - Error", err);
            });
        } catch (err) {
            console.log("handleGeneratedImg - Err", err);
        }
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
                                    <ResultImgItem url={`https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/b503c36f-1aad-4e2c-a4ec-90c063c8691c-0.png?w=248&fit=crop&auto=format`} />
                                    <ResultImgItem url={`https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/b503c36f-1aad-4e2c-a4ec-90c063c8691c-0.png?w=248&fit=crop&auto=format`} />
                                    {
                                        false &&
                                        result?.output?.map((url, key) => {
                                            <ResultImgItem url={url} key={key} />
                                        })
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