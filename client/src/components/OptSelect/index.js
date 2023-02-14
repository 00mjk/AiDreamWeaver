import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import './optselect.scss';

const OptSelect = (props) => {
    return <>
        <fieldset id="opt-select">
            <label htmlFor={props.htmlfor}>{props.labelstr}</label>
            <div className="opt-select-container">
                <select name={props.htmlfor} id={props.htmlfor} onChange={e => props?.onChange(e.target.value)}>
                    {
                        props.options.map((option, key) => <option value={option.value} key={key}>{option.name}</option>)
                    }
                </select>
                <ExpandMoreOutlinedIcon fontSize='small' />
            </div>
        </fieldset>
    </>;
}

export default OptSelect;