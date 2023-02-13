import './opttextarea.scss';

const OptPrompt = (props) => {
    return <>
        {/* <fieldset className="create-fieldset"> */}
        <fieldset id="opt-textarea">
            <label htmlFor={props.labelfor}>{props.label}</label>
            <textarea id={props.labelfor}
                placeholder={props.placeholder}
                // className="max-h-[500px] resize-none"
                className="opt-textarea-input"
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value} />
        </fieldset>
    </>
}

export default OptPrompt;