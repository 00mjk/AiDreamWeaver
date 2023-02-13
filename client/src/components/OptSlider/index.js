import Slider from '@mui/material/Slider';
import './optslider.scss';

const OptSlider = (props) => {
    return <>
        {/* <fieldset className="create-fieldset" id="opt-slider"> */}
        <fieldset id="opt-slider">
            <label>{props.label} </label>
            {/* <div id="slider-undefined" className="flex items-center gap-x-4 slider-container"> */}
            <div className="opt-slider-container">
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    max={props.max}
                    min={props.min}
                    color={props.color}
                    value={props.value}
                    disabled={!props.disabled ? false : true}
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <input
                    type="number"
                    // className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 "
                    className="slider-input"
                    value={props.value}
                    max={props.max}
                    min={props.min}
                    disabled={!props.disabled ? false : true}
                    onChange={(e) => {
                        if (e.target.value > props.max || e.target.value < props.min)
                            return;
                        props.onChange(e.target.value)
                    }} />
            </div>
        </fieldset>
    </>
}

export default OptSlider;