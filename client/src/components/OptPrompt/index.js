const OptPrompt = (props) => {
    return <>
        <fieldset className="create-fieldset">
            <label htmlFor="prompt-textarea">Prompt</label>
            <textarea id="prompt-textarea"
                placeholder="Text to Image"
                className="max-h-[500px] resize-none"
                style={{ height: '0px', minHeight: '200px' }}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value} />
        </fieldset>
    </>
}

export default OptPrompt;