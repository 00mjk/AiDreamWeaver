import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <>
        <Box className="root-box" sx={{ height: 'calc(100vh - 80px)', backgroundColor: '#1c1c27' }}>
            <Box sx={{ borderBottom: `1px solid #2A2C36` }}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="My Gallery" sx={{ marginRight: '200px' }} />
                    <StyledTab label="Prompt" />
                    <StyledTab label="+ Image" />
                    <StyledTab label="Setting" />
                </StyledTabs>
            </Box>

            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1} sx={{ padding: 0 }}>
                <TabPromptPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabImagePage />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TabSettingPage />
            </TabPanel>
        </Box>
    </>
}

export default StudioPage;