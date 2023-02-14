import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './optfilteritem.scss';

const OptFilterItem = (props) => {
    return <>
        <button className='btn-filter-item' style={{ borderColor: `#93C5FD` }}>
            <span className='img-container'>
                <img
                    alt={props.title}
                    src={props.img}
                    decoding="async"
                    data-nimg="fill"
                />
            </span>
            <div className="title">
                {props.title}
            </div>
            {
                props.active &&
                <div className="img-option">
                    <ExpandMoreOutlinedIcon fontSize='small' />
                </div>
            }
        </button>
    </>
}

export default OptFilterItem;