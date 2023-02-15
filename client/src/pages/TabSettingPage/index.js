// import { useState } from 'react'
import { useSelector } from 'react-redux';

import ResultImgItem from '../../components/ResultImgItem';
import OptSlider from '../../components/OptSlider';
import OptSelect from '../../components/OptSelect';
import OptImgDimenItem from '../../components/OptImgDimenItem';
import { primaryBtnColor } from '../../stylesheets/colors';
import "./tabsetting.scss";
import { Divider } from '@mui/material';

const TabSettingPage = (props) => {
    // Props
    const { setting, setSetting } = props;

    // Use Redux
    // const dispatch = useDispatch();
    // const toCreate = useSelector(state => state.toCreate)
    const aiObj = useSelector(state => state.aiObj)
    const auth = useSelector(state => state.auth);

    // Flags
    // const [images, setImages] = useState([]);                   // Generated Images

    return <>
        <div id="setting-studio-container">
            <aside className="left-sidebar">
                <div className="px-6 space-y-6">
                    <OptSlider
                        min={1}
                        max={6}
                        label={`Columns`}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={setting.columns}
                        onChange={(value) => setSetting({ key: "columns", value: value })}
                    />
                    <OptSelect
                        htmlfor={`model-type`}
                        labelstr={`Model`}
                        options={aiObj.models}
                        value={setting.model_id}
                        onChange={(modelId) => setSetting({ key: "model_id", value: modelId })}
                    />
                    <OptSlider
                        min={1}
                        max={1024}
                        label={`Image Dimensions`}
                        description={`Width × Height of the finished image.`}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={setting.width}
                        onChange={(val) => {
                            setSetting({ key: "width", value: (Math.round(val / 8) * 8) });
                        }}
                    />
                    <OptSlider
                        min={1}
                        max={1024}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={setting.height}
                        onChange={(val) => {
                            setSetting({ key: "height", value: (Math.round(val / 8) * 8) });
                        }}
                    />
                    <fieldset style={{ display: 'flex' }}>
                        <div style={{ flexGrow: 1 }}>
                            <OptImgDimenItem
                                width={512}
                                height={512}
                                active={(setting.width === 512 && setting.height === 512) ? true : false}
                                handleClick={() => {
                                    setSetting([
                                        { key: "width", value: 512 },
                                        { key: "height", value: 512 }
                                    ]);
                                }} />
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <label style={{ fontSize: `13px` }}>Good for avatars</label>
                        </div>
                    </fieldset>
                    <OptSlider
                        min={1}
                        max={200}
                        label={`Prompt Guidance`}
                        description={`Higher guidance will make your image closer to your prompt.`}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={Math.round(setting.guidance_scale * 10)}
                        onChange={(val) => setSetting({ key: "guidance_scale", value: (val / 10) })}
                    />
                    <OptSlider
                        min={1}
                        max={50}
                        label={`Quality & Details`}
                        description={`More steps will result in a high quality image but will take longer.`}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={setting.num_inference_steps}
                        onChange={(val) => setSetting({ key: "num_inference_steps", value: val })}
                    />
                    <Divider style={{ backgroundColor: `#5c5c5c`, marginBottom: '12px' }} />
                    {/* <OptSlider
                        min={1}
                        max={30}
                        label={`Quality & Details`}
                        description={`More steps will result in a high quality image but will take longer.`}
                        color={primaryBtnColor}
                        disabled={(auth?.user?.role_idx === 1 || auth?.user?.role_idx === 2) ? false : true}
                        value={guidanceScale}
                        onChange={(val) => setGuidanceScale(val)}
                    /> */}
                </div>
            </aside>
            <main className='main-content'>
                <div className="draggable-bounds">
                    <div className="top-toolbar">
                    </div>
                    <div className="scroll-container">
                        <div className='scroll-container-outbox'>
                            <div className='scroll-container-inbox'>
                                <div className="grid-box" style={{ gridTemplateColumns: `repeat(${setting.columns}, minmax(0px, 1fr))` }}>
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

export default TabSettingPage;