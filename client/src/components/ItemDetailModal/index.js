import { useDispatch } from 'react-redux'
import FileSaver from 'file-saver';

import { Modal, Backdrop, Box, Fade } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';

import { searchImgsByKey } from '../../actions/imgAction';
import download from '../../utils/downloadfile';
import styles from './styles.module.css';

function ItemDetailModal(props) {
    // Use Redux
    const dispatch = useDispatch()

    const searchImg = (keyword) => {
        dispatch(searchImgsByKey(keyword));
        props.onClose();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.onClose}
            closeAfterTransition
            style={{ overflowY: 'auto' }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open} >
                <Box className={styles.detailmodalcontent}>
                    <div className="relative">
                        <div
                            className="font-[510] flex flex-col lg:flex-row pt-4 p-6 md:pt-16 lg:pt-6 gap-2 lg:gap-8 w-full relative text-white overflow-auto transition-all duration-150 image-post-page">
                            <div className="flex flex-col gap-4 flex-none md:max-w-[min(60vw)]">
                                <div>
                                    <img data-testid="image-post-image"
                                        src={props?.item?.url}
                                        alt={`Prompt: ${props?.item?.prompt}`}
                                        className="rounded-lg mx-auto" data-xblocker="passed"
                                        style={{ aspectRatio: '1 / 1', maxWidth: '512px', visibility: 'visible' }} />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-2">
                                    <div className="flex">
                                        <div
                                            className="LikeButton_like_button__z_ico    flex gap-x-1.5 items-center  LikeButton_pill__ivJOa  leading-[20px]"
                                            aria-label="Toggle like">
                                            <div className="relative scale-75">
                                                <span className="transition-all overflow-visible ">
                                                    <FavoriteBorderOutlinedIcon fontSize='small' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <button
                                            className="playground-button subtle md:flex gap-2 hidden"
                                            onClick={() => download(props?.item?.url)}>
                                            <FileDownloadOutlinedIcon fontSize='small' />
                                            <span>Download</span>
                                        </button>
                                        <button className="playground-button subtle">
                                            <AddLinkIcon fontSize='small' />
                                            <span className="hidden md:flex gap-x-0.5">Copy link</span>
                                        </button>
                                        <div className="relative ">
                                            <button className=" playground-button subtle !py-[7.5px] !pl-[10px]">
                                                <MoreHorizIcon fontSize='small' />
                                            </button>
                                            <div className="absolute right-0 bottom-10 transition-all opacity-0 translate-y-2 pointer-events-none">
                                                <div
                                                    className="p-1 right-0 w-40 bg-[#1B1824] backdrop-blur-lg border-[0.5px] border-high [&>*]:rounded rounded-md overflow-hidden flex flex-col shadow-lg">
                                                    <button className="ImagePost_playground-overflow-button__WA_gb ImagePost_danger__7gxDz">
                                                        <CommentBankOutlinedIcon fontSize="string" />Report image
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between md:pl-0 flex-grow py-2 md:py-8">
                                <div className="max-w-[min(400px,85vw)]">
                                    <div>
                                        <div className="hidden md:block">
                                            <div className="flex gap-x-4 items-center justify-between md:justify-start"><a
                                                className="flex items-center gap-x-3" href="/profile/cla2x8t1l39tas601lo5a32cr">
                                                <img
                                                    className="rounded pai-border"
                                                    src="https://lh3.googleusercontent.com/a/ALm5wu30nE_WLSzLrZRj67GI-cF5CaueolzIQXCOSD74vg=s96-c"
                                                    alt="Kyle Werty avatar" width="28px" height="28px" />
                                                <span
                                                    className="color-white text-[14px] textba">{props?.item?.user_name}</span>
                                            </a>
                                                <button type="button"
                                                    className="follow-button base short blue group w-[76px] flex-none">
                                                    <p className="flex items-center justify-center gap-x-1 -ml-0.5">
                                                        <AddOutlinedIcon fontSize='string' />
                                                        <span>Follow</span>
                                                    </p>
                                                </button>
                                            </div>
                                        </div>
                                        <h1 className="InputTitle_title__FTFOb my-4 border-b-2 border-transparent">Ice cube</h1>
                                        <div className="space-y-5">
                                            <div className="space-y-1">
                                                <label className="color-secondary text-[14px] font-[590]">Prompt</label>
                                                <div className="mr-0 ">
                                                    {
                                                        props?.item?.prompt.split(",").map((item, key) => (
                                                            <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg(item)}>{item}</span>,&nbsp;</p>
                                                        ))
                                                    }
                                                    {/* <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("melting")}>melting</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("blue")}>blue</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("cartoony")}>cartoony</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("fun")}>fun</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("trending on artstation")}>trending on artstation</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("sharp focus")}>sharp focus</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("studio photo")}>studio photo</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("intricate details")}>intricate details</span>,&nbsp;</p>
                                                    <p className="inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("highly detailed")}>highly detailed</span>,&nbsp;</p>
                                                    <p className="!leading-[20px] inline"><span className="tokenized-text-view-tag" onClick={() => searchImg("by greg rutkowski")}>by greg rutkowski</span></p> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap text-sm my-4 gap-4">
                                                <button className=" playground-button"><ContentCopyIcon fontSize='string' />&nbsp;Copy Prompt</button>
                                                <button className="text-gray-400 playground-button">
                                                    <AutorenewIcon fontSize='string' />&nbsp;Remix</button>
                                                <button className="text-gray-400 playground-button">
                                                    <div className="scale-[0.5]">
                                                        <BorderColorIcon fontSize='string' />&nbsp;
                                                    </div>Edit
                                                </button>
                                            </div>
                                            <hr className="!my-6 border-low" />
                                            <ul className="list-none grid grid-cols-2 gap-y-4 gap-x-2">
                                                {
                                                    props?.item?.seed &&
                                                    <div className="space-y-0.5 text-sm">
                                                        <dt className="color-secondary font-[590]">Seed</dt>
                                                        <dl className="text-gray-200">{ }</dl>
                                                    </div>
                                                }
                                                <div className="space-y-0.5 text-sm">
                                                    <dt className="color-secondary font-[590]">Guidance Scale</dt>
                                                    <dl className="text-gray-200">{props?.item?.guidance_scale}</dl>
                                                </div>
                                                <div className="space-y-0.5 text-sm">
                                                    <dt className="color-secondary font-[590]">Sampler</dt>
                                                    <dl className="text-gray-200">{props?.item?.sampler}</dl>
                                                </div>
                                                <div className="space-y-0.5 text-sm">
                                                    <dt className="color-secondary font-[590]">Model</dt>
                                                    <dl className="text-gray-200"><a className="hover:underline" target="_blank" rel="noreferrer"
                                                        href="https://stability.ai/">Stable Diffusion 1.5</a></dl>
                                                </div>
                                                <div className="space-y-0.5 text-sm">
                                                    <dt className="color-secondary font-[590]">Created</dt>
                                                    <dl className="text-gray-200">{props?.item?.created_at}</dl>
                                                </div>
                                                <div className="space-y-0.5 text-sm">
                                                    <dt className="color-secondary font-[590]">Additional Credit</dt>
                                                    <dl className="text-gray-200"><a className="hover:underline" target="_blank" rel="noreferrer"
                                                        href="https://www.artstation.com/rutkowski">Greg Rutkowski</a></dl>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="p-6">
                        <h2 className="text-white/90 text-xl font-semibold mb-4">More images like this</h2>
                    </div> */}
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ItemDetailModal;