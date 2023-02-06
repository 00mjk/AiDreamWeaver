import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const MockupImgItem = (props) => {
    return <>
        <div
            data-testid="create-image-card"
            className="relative select-none flex justify-center items-center object-contain mx-auto rounded-md lg:mb-0 mb-10 image-card-grid"
            id="image-cldlz0azh00kks6015x6l8kz7">
            <img
                src={props.item.mockup_url}
                alt=""
                style={{ maxWidth: 'min(512px, 100%)' }} />
            <button
                title="Delete image"
                className="absolute -bottom-7 text-gray-300 hover:text-red-500 transition-colors flex gap-x-1.5 items-center text-[14px] md:hidden">
                <DeleteOutlineOutlinedIcon fontSize='small' /> Delete
            </button>
        </div>
    </>
}

export default MockupImgItem;