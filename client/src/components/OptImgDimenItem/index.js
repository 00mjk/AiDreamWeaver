const ImgDimension = (props) => {
    return <>
        <div
            id={`image-dim-${props.dimen.id}`}
            className="flex flex-row flex-wrap"
            onClick={() => props.onChange()}>
            <input
                type="radio"
                className="radio-input"
                checked={props.dimen.active}
                onChange={() => { }} />
            <label
                htmlFor={`image-dim-${props.dimen.id}`}
                className="!text-[11px]"
                style={{ width: '98px' }}>
                {props.dimen.width} × {props.dimen.height}
            </label>
        </div>
    </>
}

export default ImgDimension;