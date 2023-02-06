import Slider from '@mui/material/Slider';

const OptPromptGuidance = (props) => {
    return <>
        <fieldset className="create-fieldset">
            <label className="flex items-center gap-2">Prompt Guidance </label>
            <p>Higher values will make your image closer to your prompt.</p>
            <div id="slider-undefined" className="flex items-center gap-x-4 slider-container">
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    max={30}
                    color="secondary"
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <input
                    type="text"
                    className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 "
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)} />
            </div>
        </fieldset>
    </>
}

export default OptPromptGuidance;