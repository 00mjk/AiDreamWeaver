const OptNegPrompt = (props) => {
    return <>
        <fieldset className="create-fieldset">
            <label htmlFor="negative-prompt-textarea">Remove From Image</label>
            <textarea
                id="negative-prompt-textarea"
                placeholder="goldfish, pink, blurry"
                className="min-h-[48px] resize-none"
                style={{ height: '0px' }}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)} />
        </fieldset>
    </>
}

export default OptNegPrompt;