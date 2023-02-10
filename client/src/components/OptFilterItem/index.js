import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import styles from './styles.module.css';

const OptFilterItem = (props) => {
    return <>
        <button
            className={`filter-button relative aspect-[6/5] origin-center overflow-hidden rounded-lg border-2 transition-[transform,opacity] duration-200 scale-90 active:border-blue-300/50 ${props.item.state ? `active:border-blue-300/50 border-blue-300` : `border-transparent hover:border-high`} ${styles.filterItem}`}
            aria-label="Select filter style: Black and white (3D)"
            style={{ transitionDelay: '00ms' }}
        >
            <span>
                <img
                    alt="Black and white (3D)"
                    src={props.item.image}
                    decoding="async"
                    data-nimg="fill"
                />
            </span>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 p-1 text-left text-sm text-gray-100">
                {props.item.title}
            </div>
            {
                props.item.state &&
                <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-gray-90">
                    <ExpandMoreOutlinedIcon fontSize='small' />
                </div>
            }
        </button>
    </>
}

export default OptFilterItem;