import { IconButton, Divider } from '@mui/material';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const OptSuperResolution = (props) => {
    return <>
        <Divider light />
        <fieldset className="create-fieldset">
            <label htmlFor="super-res-textarea">Super Resolution</label>
            <textarea
                id="super-res-textarea"
                placeholder="4"
                className="min-h-[48px] resize-none"
                style={{ height: '0px' }}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)} />
            <IconButton aria-label="delete" size="small" color="success">
                <NearMeOutlinedIcon fontSize="small" />
            </IconButton>
        </fieldset>
    </>
}

export default OptSuperResolution;