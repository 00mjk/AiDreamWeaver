import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';

import styles from './styles.module.css';

const ImgRadioButton = (props) => {
    // Use Redux
    const mockupObj = useSelector(state => state.mockupObj)

    return <>
        <Grid item xs={6}>
            <label >
                <input
                    type="radio"
                    className={styles.inputRadio}
                    defaultChecked
                    checked={mockupObj.initImgUrl === props?.url ? true : false}
                    onChange={() => { }} />
                <img
                    src={props?.url}
                    className={styles.imgItem}
                    onClick={() => props?.onChange(props?.url)} />
            </label>
        </Grid>
    </>
}

export default ImgRadioButton;