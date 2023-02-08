import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import { Modal, Backdrop, Box, Fade, IconButton, Badge, Button, Popover } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddLinkIcon from '@mui/icons-material/AddLink';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CheckIcon from '@mui/icons-material/Check';

import { searchImgsByKey, addFavourite, followImgAuthor } from '../../actions/imgAction';

import download from '../../utils/downloadfile';
import styles from './styles.module.css';
import { useEffect } from 'react';

function ItemDetailModal(props) {
    // Redirect Module
    const navigate = useNavigate()

    // Use Redux
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const img = useSelector(state => state.img);

    // States
    const [isFav, setIsFav] = useState(false);
    const [favCnt, setFavCnt] = useState(0);
    const [isFollow, setIsFollow] = useState(false);
    const [copyLink, setCopyLink] = useState("");
    const [copyPrompt, setCopyPrompt] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const popOverOpen = Boolean(anchorEl);

    /**
     * @description
     *  Search images by selected prompt. 
     */
    const searchImg = (keyword) => {
        dispatch(searchImgsByKey(keyword));
        props.onClose();
    }

    /**
     * @description
     *  Add or remove fav option to image.
     */
    const handleFavImg = () => {
        if (auth.isAuthenticated) {
            dispatch(addFavourite({ imageId: props?.item?._id }));
        } else {
            navigate('/signin');
        }
    }

    /**
     * @description
     *  Copy link
     */
    const handleCopyLink = () => {
        setCopyLink("hello");
    }

    /**
     * @description
     *  Follow or unfollow user.
     */
    const handleIsFollow = (isFollow) => {
        if (auth.isAuthenticated) {
            dispatch(followImgAuthor({
                authorId: props?.item?.user_id,
                isFollow: isFollow
            }));
        } else {
            navigate('/signin');
        }
    }

    const handlePopOverClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopOverClose = () => {
        setAnchorEl(null);
    };

    /**
     * @description
     *  Copy text to clipboard.
     */
    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(props?.item?.prompt).then(
            () => {
                setCopyPrompt(true);
                setInterval(() => {
                    setCopyPrompt(false);
                }, 2000);
            },
            () => {
            }
        );
    }

    /**
     * @description
     *  Remix the prompt (txt to img)
     */
    const handleRemix = () => {
        if (auth.isAuthenticated) {
            dispatch(followImgAuthor({
                authorId: props?.item?.user_id,
                isFollow: isFollow
            }));
        } else {
            navigate('/signin');
        }
    }

    /**
     * @description
     *  Edit the prompt (img to img)
     */
    const handleEdit = () => {
        if (auth.isAuthenticated) {
        } else {
            navigate('/signin');
        }
    }

    useEffect(() => {
        setIsFav(img.imageIsFav);
        setFavCnt(img.imageFavCnt);
        setIsFollow(img.imageIsFollow);
    }, [img]);

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
                                        <IconButton color="error" onClick={() => handleFavImg()} size="small">
                                            <Badge color="secondary" badgeContent={favCnt}>
                                                <FavoriteBorderOutlinedIcon />
                                            </Badge>
                                        </IconButton>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon fontSize='string' />} size='string' onClick={() => download(props?.item?.url)}>
                                            <span className={styles.smlBtnFont}>Download</span>
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size='string'
                                            onClick={() => handleCopyLink()}
                                            startIcon={copyLink === "" ? <AddLinkIcon fontSize='string' /> : <CheckIcon fontSize='string' />}
                                            disabled={copyLink === "" ? false : true}
                                            disableFocusRipple={copyLink === "" ? false : true}
                                            disableRipple={copyLink === "" ? false : true}>
                                            <span className={styles.smlBtnFont}>Copy link</span>
                                        </Button>

                                        <IconButton size="small" onClick={handlePopOverClick}>
                                            <MoreHorizIcon fontSize="small" />
                                        </IconButton>
                                        <Popover
                                            id={popOverOpen ? 'simple-popover' : undefined}
                                            open={popOverOpen}
                                            anchorEl={anchorEl}
                                            onClose={handlePopOverClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <Button variant="outlined" size='small'>
                                                <CommentBankOutlinedIcon fontSize="string" />&nbsp;<span className={styles.smlBtnFont}>Report image</span>
                                            </Button>
                                        </Popover>
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

                                                {!isFollow ?
                                                    <Button variant="outlined" startIcon={<AddOutlinedIcon fontSize='string' />} size='string' onClick={() => handleIsFollow(true)}>
                                                        <span className={styles.smlBtnFont}>Follow</span>
                                                    </Button>
                                                    :
                                                    <Button variant="outlined" startIcon={<RemoveOutlinedIcon fontSize='string' />} size='string' color='error' onClick={() => handleIsFollow(false)}>
                                                        <span className={styles.smlBtnFont}>Unfollow</span>
                                                    </Button>
                                                }
                                            </div>
                                        </div>
                                        <h1 className="InputTitle_title__FTFOb my-4 border-b-2 border-transparent">Ice cube</h1>
                                        <div className="space-y-5">
                                            <div className="space-y-1">
                                                <label className="color-secondary text-[14px] font-[590]">Prompt</label>
                                                <div className="mr-0 ">
                                                    {
                                                        props?.item?.prompt.split(",").map((item, key) => (
                                                            <p className="inline" key={key}><span className="tokenized-text-view-tag" onClick={() => searchImg(item)}>{item}</span>,&nbsp;</p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap text-sm my-4 gap-4">
                                                <Button
                                                    variant="outlined"
                                                    startIcon={!copyPrompt ? <ContentCopyIcon fontSize='string' /> : <CheckIcon fontSize='string' />}
                                                    size='string'
                                                    onClick={() => handleCopyPrompt()}>
                                                    <span className={styles.smlBtnFont}>&nbsp;Copy Prompt</span>
                                                </Button>
                                                <Button variant="outlined" startIcon={<AutorenewIcon fontSize='string' />} size='string' onClick={() => handleRemix()}>
                                                    <span className={styles.smlBtnFont}>&nbsp;Remix</span>
                                                </Button>
                                                <Button variant="outlined" startIcon={<BorderColorIcon fontSize='string' />} size='string' onClick={() => handleEdit()}>
                                                    <span className={styles.smlBtnFont}>&nbsp;Edit</span>
                                                </Button>
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
                                                    <dl className="text-gray-200">{moment(props?.item?.created_at).utc().format('YYYY-MM-DD hh:mm:ss')}</dl>
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
        </Modal >
    );
}

export default ItemDetailModal;