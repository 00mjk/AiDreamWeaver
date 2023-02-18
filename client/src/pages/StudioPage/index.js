import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

import { AI_MAKE_IMG_INIT } from '../../actions/config';
import Box from '@mui/material/Box';
import TabPromptPage from '../TabPromptPage';
import TabImagePage from '../TabImagePage';
import TabSettingPage from '../TabSettingPage';

import "./studiopage.scss";

const StyledTabs = styled((props) => (
    <Tabs
        onChange={() => console.log('tab change')}
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: '3px',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#8e72ff',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const StudioPage = () => {
    // States
    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [aiState, setAiState] = useState(AI_MAKE_IMG_INIT);
    const [setting, setSetting] = useState({
        key: process.env.REACT_APP_STABLE_DIFFUSION_API_KEY,            // Your API Key
        columns: 1,                     // Avatar Display nums.
        prompt: "",                     // Your Prompt
        model_id: "f222-diffusion",       // public or your trained Model id
        samples: 1,                     // number of images you want in response
        negative_prompt: "",            // Items you don't want in the image
        filter: {
            _id: 123123,
            name: "None",
            avatar: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
            prompt: ""
        },                              // Style (None, Colorpop, Black&white ...), Fields(_id, avatar, name, prompt))
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
    });

    const handleTabChange = (event, idx) => {
        setTabIndex(idx);
    };

    const handleSetSetting = (item) => {
        const settingStr = JSON.stringify(setting);
        const settingObj = JSON.parse(settingStr);
        if (item.length !== undefined) {
            item.map((obj, key) => {
                settingObj[obj.key] = obj.value;
                setSetting(settingObj);
            });
        } else {
            settingObj[item.key] = item.value;
            setSetting(settingObj);
        }
    }

    return <>
        <Box className="root-box" sx={{ height: 'calc(100vh - 80px)', backgroundColor: '#1c1c27' }}>
            <Box sx={{ borderBottom: `1px solid #2A2C36` }}>
                <StyledTabs value={tabIndex} onChange={handleTabChange}>
                    <StyledTab label="My Gallery" />
                    <StyledTab label="Prompt" />
                    <StyledTab label="+ Image" />
                    <StyledTab label="Setting" />
                </StyledTabs>
            </Box>

            <TabPanel value={tabIndex} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={tabIndex} index={1} sx={{ padding: 0 }}>
                <TabPromptPage
                    setting={setting}
                    setSetting={handleSetSetting}
                    loading={loading}
                    setLoading={setLoading}
                    aiState={aiState}
                    setAiState={setAiState}
                />
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                <TabImagePage
                    setting={setting}
                    setSetting={handleSetSetting}
                />
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
                <TabSettingPage
                    setting={setting}
                    setSetting={handleSetSetting}
                />
            </TabPanel>
        </Box>
    </>
}

export default StudioPage;