import { useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';

const OptQualityDetails = (props) => {
    // Use Redux
    const authObj = useSelector(state => state.auth);

    return <>
        <fieldset className="create-fieldset">
            <label>Quality &amp; Details</label>
            {/* <p>More steps will result in a high quality image but will take longer.</p> */}
            <div id="slider-undefined" className="flex items-center gap-x-4 slider-container">
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    max={200}
                    color="secondary"
                    value={props.value}
                    disabled={(authObj?.user?.role == 0) ? true : false}
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <input
                    type="text"
                    className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 "
                    value={props.value}
                    disabled={(authObj?.user?.role == 0) ? true : false}
                    onChange={(e) => props.onChange(e.target.value)} />
            </div>
        </fieldset>
    </>
}

export default OptQualityDetails;