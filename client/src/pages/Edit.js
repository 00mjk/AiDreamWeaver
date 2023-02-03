import { useState } from 'react';
import axios from 'axios';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import HelpIcon from '@mui/icons-material/Help';
import TwitterIcon from '@mui/icons-material/Twitter';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Slider from '@mui/material/Slider';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

function Edit() {
    // Flags
    const [apiCallFlag, setApiCallFlag] = useState("pending");  // Generate Api call state (pending, loading, created)
    const [menuOpened, setMenuOpened] = useState(false);        // Menu state
    const [rightSidebar, setRightSidebar] = useState(false);    // Rite sidebar state
    const [filterBox, showFilterBox] = useState(false);         // 
    const [columns, setColumns] = useState(1);                  // Colum count to show image.

    // Api Params
    const [batchId, setBatchId] = useState(0);
    const [prompt, setPrompt] = useState("");
    const [negPrompt, setNegPrompt] = useState("");
    const [cfgScale, setCfgScale] = useState(0);
    const [dreamBoothModel, setDreamBoothModel] = useState("stable-diffusion");
    const [genVariants, setGenVariants] = useState(25);
    const [guidanceScale, setGuidanceScale] = useState(9);
    const [width, setWidth] = useState(512);
    const [height, setHeight] = useState(512);
    const [hide, setHide] = useState(0);
    const [isPrivate, setIsPrivate] = useState(0);
    const [modelType, setModelType] = useState(0);
    const [imgNum, setImgNum] = useState(1);
    const [sampler, setSampler] = useState(0);
    const [seed, setSeed] = useState(0);
    const [steps, setSteps] = useState(0);
    const [strength, setStrength] = useState(0);

    // Generated Images
    const [images, setImages] = useState([]);

    // Image Dimensions List
    const [dimens, setDimens] = useState([{
        active: true,
        width: 512,
        height: 512
    }, {
        active: false,
        width: 1024,
        height: 1024
    }, {
        active: false,
        width: 640,
        height: 384
    }, {
        active: false,
        width: 384,
        height: 640
    }, {
        active: false,
        width: 768,
        height: 512
    }, {
        active: false,
        width: 512,
        height: 768
    }]);

    // Number of Images
    const [imgNums, setImgNums] = useState([{
        active: true,
        num: 1,
    }, {
        active: false,
        num: 2,
    }, {
        active: false,
        num: 3,
    }, {
        active: false,
        num: 4,
    }]);

    const handleDimenChange = (idx) => {
        setDimens(dimens.map((item, key) => {
            if (key === idx) {
                setWidth(item.width);
                setHeight(item.height);
                return { ...item, active: true }
            }
            return { ...item, active: false }
        }))
    }

    const handleimgNumChange = (idx) => {
        setImgNums(imgNums.map((item, key) => {
            if (key === idx) {
                setImgNum(item.num);
                return { ...item, active: true }
            }
            return { ...item, active: false }
        }))
    }

    const handleColumnChange = (event, newValue) => {
        setColumns(newValue);
    }

    const handleGuidanceChange = (event, newValue) => {
        setGuidanceScale(newValue);
    }

    const handleQualityChange = (event, newValue) => {
        setGenVariants(newValue);
    }

    /**
     * @description
     *  Call api by params (prompt, batchId, width, height ...)
     */
    const handleGenerateImg = async () => {
        console.log("--- handleGenerateImg --- ", prompt);

        try {
            setApiCallFlag('loading');
            axios.post(`https://cors-anywhere.herokuapp.com/https://stablediffusionapi.com/api/v3/text2img`, {
                "key": "iIjvdXCYHvVOuemfFgGH9JXSsVwl3grN7ZPtGGGAxY1g32kayxq1SVB3s08A",
                "prompt": prompt,
                "negative_prompt": negPrompt,
                "width": width,
                "height": height,
                "samples": imgNum,
                "num_inference_steps": "20",
                "safety_checker": "no",
                "enhance_prompt": "yes",
                "seed": null,
                "guidance_scale": guidanceScale,
                "webhook": null,
                "track_id": null
            })
                .then((response) => {
                    let res = response.data;
                    console.log(res);

                    if (res.status === 'success') {
                        setImages(res.output);
                        setApiCallFlag("created");
                        return;
                    } else if (res.status === "error") {
                        // setError(res.messege.samples[0]);
                        window.alert(res.messege.samples[0]);
                    }

                    setApiCallFlag("pending");
                })
        } catch (err) {
            console.log(err);
            setApiCallFlag("pending");
        }
    }

    /**
     * @description
     *  Generate image items which are created by api.
     */
    const getCreatedImages = () => {
        if (apiCallFlag === "pending") {
            return <div>
                Pending
            </div>
        } else if (apiCallFlag === "loading") {
            return <div>
                Loading
            </div>
        } else if (apiCallFlag === "created") {
            return <div id="scroll-container" className="p-10 pt-5 ">
                <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
                        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                            {
                                images.map((url, key) =>
                                    <div data-testid="create-image-card" className="relative select-none flex justify-center items-center object-contain mx-auto rounded-md lg:mb-0 mb-10 image-card-grid" id="image-cldlz0azh00kks6015x6l8kz7" key={key}>
                                        <img src={url} style={{ maxWidth: 'min(512px, 100%)' }} />
                                        <button title="Delete image" className="absolute -bottom-7 text-gray-300 hover:text-red-500 transition-colors flex gap-x-1.5 items-center text-[14px] md:hidden">
                                            <DeleteOutlineOutlinedIcon fontSize='small' /> Delete
                                        </button>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    return <>
        <div id="__next">
            <div className="fixed top-14 w-full flex justify-center z-10 left-[50%] -translate-x-1/2">
                <div className="transition-transform will-change-transform ease-out -translate-y-28" />
                <div className="transition-transform will-change-transform ease-out -translate-y-28" />
                <div className="transition-transform will-change-transform ease-out -translate-y-28" />
                <div className="transition-transform will-change-transform ease-out -translate-y-28" />
                <div className="transition-transform will-change-transform ease-out -translate-y-28" />
            </div>
            <div>
                <nav className="Header_header__Kpax6" style={{ zIndex: 40 }}>
                    <div className="chakra-stack css-84zodg" style={{ height: '40px' }}>
                        <div className="Header_header__logo__Gat_c"><button aria-label="Go Back" className="md:hidden hidden">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#E6E6E7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M12 19L5 12L12 5" stroke="#E6E6E7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                            <a href="/">
                                <span >
                                    <img className="Header_header__logo_desktop__Y2IAX" src={`./assets/images/logo.png`} alt="Playground logo" width="157px" height="32px" />
                                    <img className="Header_header__logo_mobile__HjbTR" src="./create_files/logo.svg" alt="Playground logo" width="32px" height="32px" />
                                </span>
                            </a>
                        </div>
                        <div className="chakra-input__group Header_header__search__5ra3h css-4302v8">
                            <div className="chakra-input__left-element css-1cw84h2" style={{ height: '36px' }}>
                                <SearchIcon fontSize="small" />
                            </div>
                            <input autoComplete="off" type="search" placeholder="Search" id="search" className="chakra-input css-nxezkn" defaultValue />
                            <div className="chakra-input__right-element css-11pdqhs" style={{ height: '36px' }}>
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3462 5.91113H11.4492L9 15.9336H9.89697L12.3462 5.91113Z" fill="#828086" />
                                    <rect x="0.5" y="0.5" width={21} height={21} rx="3.5" stroke="#2A2832" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <header className="flex-none md:pt-0 Header_header__auth__O1270">
                        <div className="Header_header__auth_true__eBAi7">
                            <div className="relative">
                                <button data-cy="open-profile-dropdown" style={{ paddingTop: '2px' }}
                                    onClick={() => setMenuOpened(!menuOpened)}>
                                    <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="Neill Chan avatar" referrerPolicy="no-referrer" src={`./unnamed(7).png`} decoding="async" data-nimg="intrinsic" className="rounded-[3px] bg-gray-900" style={{ borderRadius: '6px', position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </span>
                                </button>
                                <div className={`absolute p-1 right-0 w-48 bg-gray-900 rounded-lg origin-top-right transition-all border border-white/10 ${menuOpened ? "" : "scale-95 opacity-0 pointer-events-none"}`}>
                                    <a className="profile-item" href="https://playgroundai.com/profile/cldk7hun904c9s601e93se8h1">
                                        <PersonOutlineOutlinedIcon fontSize='small' />Profile</a>
                                    <button className="profile-item">
                                        <SettingsOutlinedIcon fontSize='small' />Settings
                                    </button>
                                    <a className="profile-item" href="https://discord.gg/jrjAZQbQ5D">
                                        <ChatBubbleOutlineOutlinedIcon fontSize='small' />Join Discord
                                    </a>
                                    <a className="profile-item" href="https://playgroundai.com/notifications">
                                        <NotificationsNoneOutlinedIcon fontSize='small' />Notifications
                                    </a>
                                    <a className="profile-item" href="https://playgroundai.com/pricing">
                                        <span><MoneyIcon fontSize='small' /></span>Pricing
                                    </a>
                                    <button className="profile-item">
                                        <HelpIcon fontSize='small' />Request Help
                                    </button>
                                    <a className="profile-item" href="https://twitter.com/playground_ai">
                                        <TwitterIcon fontSize='small' />Twitter
                                    </a>
                                    <a className="profile-item" href="http://help.playgroundai.com/">
                                        <QuizIcon fontSize='small' />FAQ
                                    </a>
                                    <a className="profile-item" href="https://dapper-glove-b11.notion.site/Working-at-Playground-AI-e90f8b72558748dcb77dcf4384410d7a">
                                        <WorkOutlineOutlinedIcon fontSize='small' />Jobs
                                    </a>
                                    <a className="profile-item" href="https://playgroundai.com/privacy">
                                        <ShieldOutlinedIcon fontSize='small' />Privacy Policy
                                    </a>
                                    <a className="profile-item" href="https://playgroundai.com/terms">
                                        <DescriptionOutlinedIcon fontSize='small' />Terms of Service
                                    </a>
                                    <button className="profile-item">
                                        <LogoutOutlinedIcon fontSize='small' />Log out
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex' }} />
                            </div>
                        </div>
                    </header>
                </nav>
                <div className="Layout_layout__main__2GVyJ fixed top-[calc(60px+env(safe-area-inset-top))] bottom-[env(safe-area-inset-bottom)] left-0 right-0 !mt-0 !min-h-0 bg-[#05020E] overflow-y-auto overflow-x-hidden dark-scrollbar select-none test-base lg:text-normal">
                    <div className={`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 text-white bg-[#05020E] h-[calc(100vh-62px)] border-t border-white/10 2xl:border-t-0 mx-auto 2xl:border-${!rightSidebar ? "x" : "r"}`}>
                        <aside id="left-sidebar" className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                            <div className="px-6 space-y-6">
                                <fieldset className="create-fieldset">
                                    <label htmlFor="prompt-textarea">Prompt</label>
                                    {/* <p>What do you want to see? You can use a single word or a full sentence.</p> */}
                                    <textarea id="prompt-textarea"
                                        placeholder="Text to Image"
                                        className="max-h-[500px] resize-none"
                                        style={{ height: '0px', minHeight: '200px' }}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        value={prompt} />
                                </fieldset>
                                <fieldset className="create-fieldset">
                                    <label className="flex" htmlFor="negative-prompt-textarea">Remove From Image
                                        <label className="chakra-switch [&>span]:bg-[#39324E] [&>span[data-checked]]:bg-[#76ADFF] [&>span]:p-1 ml-auto css-ghot30">
                                            <input className="chakra-switch__input"
                                                type="checkbox"
                                                aria-disabled="false"
                                                defaultValue
                                                style={{ border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: '0px', overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }} />
                                            <span aria-hidden="true" className="chakra-switch__track css-j1l0qk">
                                                <span className="chakra-switch__thumb css-7roig" />
                                            </span>
                                        </label>
                                    </label>
                                    <p>Describe details you don't want in your image like color, objects, or a scenery.</p>
                                    <textarea hidden id="negative-prompt-textarea" placeholder="goldfish, pink, blurry" className="min-h-[48px] resize-none" style={{ height: '0px' }} defaultValue={""} />
                                </fieldset>
                                <fieldset className="create-fieldset"><label htmlFor="filter-select">Filter</label>
                                    <p>Experiment with different styles that can be applied to your image.</p>
                                    <div aria-hidden="true">
                                        <div className="select" role="select"
                                            onClick={() => showFilterBox(!filterBox)}>
                                            <button type="button" className="psuedo-select text-left">None</button>
                                            <ExpandMoreOutlinedIcon fontSize="small" />
                                        </div>
                                        <div className="absolute pointer-events-none bottom-2 flex w-screen flex-col lg:w-[400px]" style={{ maxHeight: '80vh', left: '393.594px', top: 'min(850px - min(1545.53px, 80vh), 526.656px)' }}>
                                            <div className={`scrollbar-hide pai-border z-50 overflow-auto rounded-lg bg-gray-95 shadow-2xl transition-[transform,opacity] duration-[50ms] pointer-events-none ${filterBox ? '' : 'opacity-0'} -translate-x-2`}>
                                                <div className="absolute z-50 w-[calc(100%-2px)] items-center space-y-2 overflow-hidden rounded-t-lg border-b border-low bg-inherit px-4 pb-2 pt-4 lg:pt-2">
                                                    <div className="flex justify-between">
                                                        <h3 className="font-bold text-white">Filter</h3>
                                                        <button className="pb-1 text-gray-600 lg:hidden">
                                                            <ExpandCircleDownOutlinedIcon fontSize="small" />
                                                        </button>
                                                    </div>
                                                    <div className="relative">
                                                        <input type="text" placeholder="Search" className="input pai-border mb-2 w-full rounded-md bg-gray-95 p-2 pl-8 outline-none" defaultValue />
                                                        <span className="absolute left-2 top-2.5 text-gray-500">
                                                            <SearchIcon fontSize='small' />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="h-32 lg:h-28" />
                                                <div className="grid grid-cols-3 gap-2 p-2 pt-0 sm:grid-cols-4 lg:grid-cols-3">
                                                    <button className={`filter-button relative aspect-[6/5] origin-center overflow-hidden rounded-lg border-2 transition-[transform,opacity] duration-200 scale-90 ${filterBox ? '' : 'opacity-0'} active:border-blue-300/50 border-blue-300" aria-label="Select filter style: None`} style={{ transitionDelay: '0ms' }}>
                                                        <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-2">
                                                            None</div>
                                                        <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-gray-90">
                                                            <ExpandMoreOutlinedIcon fontSize='small' /></div>
                                                    </button>
                                                    <button className={`filter-button relative aspect-[6/5] origin-center overflow-hidden rounded-lg border-2 transition-[transform,opacity] duration-200 scale-90 ${filterBox ? '' : 'opacity-0'} active:border-blue-300/50 border-transparent hover:border-high`} aria-label="Select filter style: Black and white (3D)" style={{ transitionDelay: '360ms' }}>
                                                        <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
                                                            <img alt="Black and white (3D)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                                                            <noscript />
                                                        </span>
                                                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 p-1 text-left text-sm text-gray-100">
                                                            Black and white (3D)</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <select id="filter-select" className="sr-only absolute top-0 left-0">
                                        <option value="none" className="text-black">None</option>
                                        <option value="black_and_white_3d" className="text-black">Black and white (3D)</option>
                                    </select>
                                </fieldset>
                                <fieldset className="create-fieldset">
                                    <label>Image to Image</label>
                                    {/* <p>Upload or draw an image to use as inspiration.</p> */}
                                    <fieldset>
                                        <div className="image-to-image">
                                            <div className="file-upload flex flex-row justify-center">
                                                <div className="mr-3">
                                                    <label>
                                                        <input className="hidden" type="file" accept="image/*" />
                                                        <AddCircleOutlineIcon />
                                                    </label>
                                                </div>
                                                {/* <div className="h-1/4 w-px bg-zinc-400" /> */}
                                                {/* <button title="Brush" className="ml-3 disabled:opacity-50">
                                                    <CreateOutlinedIcon />
                                                </button> */}
                                            </div>
                                        </div>
                                    </fieldset>
                                </fieldset>
                            </div>
                            <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                                <div>
                                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleGenerateImg}>Generate</Button>
                                </div>
                            </div>
                        </aside>
                        <main className={`${!rightSidebar ? "xl:col-span-3 lg:col-span-2" : "xl:col-span-4 lg:col-span-3"} lg:overflow-y-auto lg:overflow-x-hidden border-x border-white/10 relative`}>
                            <button aria-label="Toggle sidebar" className="absolute hidden lg:flex items-center justify-center -right-4 top-20 z-30 bg-gray-95 rounded-l-full w-10 h-12 pr-2 border-l border-white/10 "
                                onClick={() => setRightSidebar(!rightSidebar)}>
                                {!rightSidebar ? <ChevronRightOutlinedIcon fontSize='small' /> : <ChevronLeftOutlinedIcon fontSize='small' />}
                            </button>
                            <div className="relative w-full h-full" id="draggable-bounds">
                                <div className="sticky m-0 px-0 py-5 flex items-center justify-center top-0 z-[5] bg-[#05020E] border-b border-white/10 pl-4">
                                    <div className="flex items-center">
                                        <label htmlFor="import" className="cursor-pointer text-purple-primary text-[0.7rem] font-bold uppercase">+ Import
                                            Image</label>
                                        <input type="file" name="import" id="import" accept="image/png, image/jpeg, image/svg+xml, image/webp, image/bmp, image/gif" className="opacity-0 pointer-events-none w-0 h-0" />
                                    </div>
                                    <div className="w-1/4 min-w-[250px] content-right ml-auto mr-10">
                                        <fieldset className="create-fieldset">
                                            <div id="slider-Columns" className="flex items-center gap-x-4 slider-container">
                                                <label htmlFor="range-slider-Columns" className="text-sm text-gray-400">Columns</label>
                                                <Slider
                                                    size="small"
                                                    aria-label="Small"
                                                    valueLabelDisplay="auto"
                                                    color="secondary"
                                                    value={columns}
                                                    min={1}
                                                    max={6}
                                                    onChange={handleColumnChange}
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                {/* <div className="absolute inset-0 top-16 flex-col items-center justify-center p-4 hidden lg:flex" /> */}
                                {getCreatedImages()}
                            </div>
                        </main>
                        <aside className={`lg:overflow-y-auto relative z-20 transition-all ${!rightSidebar ? '' : 'hidden'} `}>
                            <div className="px-6 divide-y divide-white/10">
                                {/* <fieldset className="create-fieldset py-8">
                                    <label htmlFor="model-type">Model</label>
                                    <p>Different AI models can produce different or better results so feel free to experiment.</p>
                                    <div className="select">
                                        <select name="model-type" id="model-type"
                                            onChange={(e) => setDreamBoothModel(e.target.value)}
                                            value={dreamBoothModel}>
                                            <option value="stable-diffusion" data-version="1.5">Stable Diffusion 1.5</option>
                                            <option value="stable-diffusion-2" data-version={2.0}>Stable Diffusion 2.1</option>
                                            <option value="dalle-2" data-version={2.0}>DALL·E 2</option>
                                        </select>
                                        <ExpandMoreOutlinedIcon fontSize='small' />
                                    </div>
                                </fieldset> */}
                                <div className="flex flex-col gap-y-8 py-8">
                                    <fieldset className="create-fieldset">
                                        <label>Image Dimensions</label>
                                        <p>Width × Height of the finished image.</p>
                                        <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                                            {
                                                dimens.map((dimen, key) =>
                                                    <div className="flex flex-row flex-wrap" id={`image-dim-${dimen.id}`} key={key} onClick={() => handleDimenChange(key)}>
                                                        <input type="radio" className="radio-input" checked={dimen.active} onChange={() => { }} />
                                                        <label htmlFor={`image-dim-${dimen.id}`} className="!text-[11px]" style={{ width: '98px' }}>{dimen.width} × {dimen.height}</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="text-sm grey-100 mt-1">
                                            <p>Buy a <a target="_blank" href="https://playgroundai.com/pricing" style={{ color: 'rgb(118, 173, 255)' }}>Pro plan</a> for any width or height up to 1536px</p>
                                        </div>
                                    </fieldset>
                                    <fieldset className="create-fieldset">
                                        <label className="flex items-center gap-2">Prompt Guidance </label>
                                        <p>Higher values will make your image closer to your prompt.</p>
                                        <div id="slider-undefined" className="flex items-center gap-x-4 slider-container">
                                            <Slider
                                                size="small"
                                                value={guidanceScale}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                                max={30}
                                                color="secondary"
                                                onChange={handleGuidanceChange}
                                            />
                                            <input type="text" className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 " value={guidanceScale} onChange={(e) => setGuidanceScale(e.target.value)} />
                                        </div>
                                    </fieldset>
                                    <fieldset className="create-fieldset">
                                        <label>Quality &amp; Details</label>
                                        <p>More steps will result in a high quality image but will take longer.</p>
                                        <div id="slider-undefined" className="flex items-center gap-x-4 slider-container">
                                            <Slider
                                                size="small"
                                                value={genVariants}
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                                max={200}
                                                color="secondary"
                                                onChange={handleQualityChange}
                                            />
                                            <input type="text" className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 " value={genVariants} onChange={(e) => setGenVariants(e.target.value)} />
                                        </div>
                                    </fieldset>
                                </div>
                                {/* <div className="flex flex-col gap-y-4 py-8 ">
                                    <fieldset className="create-fieldset">
                                        <label htmlFor="seed-input">Seed</label>
                                        <p>Different numbers result in new variations of your image.</p>
                                        <input id="seed-input" className="text-input" disabled type="number" defaultValue />
                                        <div className="flex items-center gap-x-2">
                                            <label className="chakra-checkbox css-192puf7" data-checked>
                                                <input className="chakra-checkbox__input" type="checkbox" id="randomize-seed" style={{ border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: '0px', overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }} />
                                                <span className="chakra-checkbox__control css-19ag05x" data-checked aria-hidden="true">
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', transform: 'none' }}>
                                                        <svg viewBox="0 0 12 10" className="css-1x1o9fj" opacity={1} strokeDashoffset={0} style={{ fill: 'none', strokeWidth: 2, stroke: 'currentcolor', strokeDasharray: 16 }}>
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg>
                                                    </div>
                                                </span>
                                            </label>
                                            <label htmlFor="randomize-seed" className="mt-1 text-sm text-gray-300">Randomize each number to get new variations</label>
                                        </div>
                                    </fieldset>
                                </div> */}
                                {/* <div className="flex flex-col gap-y-4" style={{ borderColor: 'transparent' }}>
                                    <fieldset className="create-fieldset">
                                        <button aria-label="Toggle advanced options" id="advanced-options-toggle">
                                            <div className="flex flex-row justify-center">
                                                <p className="advanced-options-toggle">Show Advanced Options</p>
                                            </div>
                                        </button>
                                        <div className="advanced-options-container transition-all overflow-hidden opacity-0 pointer-events-none max-h-0 pb-4">
                                            <label>Sampler</label>
                                            <p>The diffusion sampling method.</p>
                                            <div className="select">
                                                <select name="advanced-options" id="advanced-options">
                                                    <option value={1}>pndm (plms)</option>
                                                    <option value={0}>ddim</option>
                                                    <option value={2}>k_euler</option>
                                                    <option value={3}>k_euler_ancestral</option>
                                                    <option value={4}>k_heun</option>
                                                    <option value={5}>k_dpm_2</option>
                                                    <option value={6}>k_dpm_2_ancestral</option>
                                                    <option value={7}>k_lms</option>
                                                </select>
                                                <svg data-testid="geist-icon" fill="none" height={16} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div> */}
                                <fieldset className="create-fieldset py-8">
                                    <label>Number of Images</label>
                                    <p>Select the number of images you would like to generate.</p>
                                    <div className="flex gap-x-2">
                                        {
                                            imgNums.map((imgNum, key) => <>
                                                <input type="radio" className="radio-input" checked={imgNum.active} />
                                                <label onClick={() => handleimgNumChange(key)}>{imgNum.num}</label>
                                            </>
                                            )
                                        }
                                    </div>
                                </fieldset>
                                {/* <div className="flex flex-col gap-y-4 py-8">
                                    <fieldset className="create-fieldset"><label>Private Session</label>
                                        <p>Images will only be visible to you until you're ready to share them.
                                            <span> Buy a
                                                <a target="_blank" href="https://playgroundai.com/pricing" style={{ color: 'rgb(118, 173, 255)' }}>Pro plan</a> to persist this setting across sessions.
                                            </span>
                                        </p>
                                        <div className="flex gap-x-3 w-44 items-center">
                                            <label className="chakra-switch [&>span]:bg-[#39324E] [&>span[data-checked]]:bg-[#76ADFF] [&>span]:p-1 css-ghot30">
                                                <input className="chakra-switch__input" type="checkbox" defaultValue style={{ border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: '0px', overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }} />
                                                <span aria-hidden="true" className="chakra-switch__track css-j1l0qk">
                                                    <span className="chakra-switch__thumb css-7roig" />
                                                </span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div> */}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <span id="__chakra_env" hidden />
        </div>
    </>
}

export default Edit;