const OptSuperResolution = (props) => {
    return <>
        <fieldset className="create-fieldset">
            <label htmlFor="super-res-textarea">Super Resolution</label>
            <textarea
                id="super-res-textarea"
                placeholder="4"
                className="min-h-[48px] resize-none"
                style={{ height: '0px' }}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)} />
        </fieldset>
    </>
}

export default OptSuperResolution;