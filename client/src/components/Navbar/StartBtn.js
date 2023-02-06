import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { bgColor, btnColor } from '../../stylesheets/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: bgColor,
    '&:hover': {
        backgroundColor: btnColor,
    },
}));

export default function CustomizedButtons(props) {
    return (
        <ColorButton variant="contained">{props.btnName}</ColorButton>
    );
}