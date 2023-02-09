import Grid from '@mui/material/Grid';

import styles from './styles.module.css';

const ImgRadioButton = (props) => {
    return <>
        <Grid item xs={6}>
            <label >
                <input type="radio" className={styles.inputRadio} name="test" defaultValue="small" defaultChecked />
                <img src={props?.url} className={styles.imgItem} alt="Option 1" onClick={() => props?.onChange(props?.url)} />
            </label>
        </Grid>
    </>
}

export default ImgRadioButton;