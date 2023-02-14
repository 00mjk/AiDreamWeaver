import { useState } from "react";

import { IconButton } from '@mui/material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

import OptFilterItem from "../OptFilterItem";

import "./optfilter.scss";

const OptFilter = (props) => {
    const [showFilterBox, setShowFilterBox] = useState(false);
    const [curFilter, setCurFilter] = useState(filters[0]);

    const handleChoseFilter = (idx) => {
        console.log(idx, "handleChoseFilter");
        // const len = filters.length;
        // for (var i = 0; i < len; i++)
        //     filters[i].state = false;

        // filters[idx].state = true;
        // setCurFilter(filters[idx]);
    }

    return <>
        <div className="filter-box">
            <div className="chose-box"
                onClick={() => setShowFilterBox(!showFilterBox)}>
                <OptFilterItem active={true} />
                <IconButton aria-label="delete">
                    <PlayArrowOutlinedIcon />
                </IconButton>
            </div>
            {/* <div className="popup-box">
                <div className="scrollbar">
                    <div className="grid-column">
                        {
                            filters.map((filter, key) => (
                                <OptFilterItem
                                    title={filter.title}
                                    active={filter.state}
                                    img={filter.image}
                                    key={key}
                                    onClick={() => window.alert(key)} />
                            ))
                        }
                    </div>
                </div>
            </div> */}
        </div>
    </>
}

const filters = [{
    title: "None",
    image: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
    prompt: "",
    state: true
}, {
    title: "Colorpop",
    image: "https://storage.googleapis.com/pai-marketing/filters/elizaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Instaport",
    image: "https://storage.googleapis.com/pai-marketing/filters/instaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Playtoon",
    image: "https://storage.googleapis.com/pai-marketing/filters/pltn-style.png",
    prompt: "",
    state: false
}, {
    title: "Woolitize",
    image: "https://storage.googleapis.com/pai-marketing/filters/woolitize.jpeg",
    prompt: "",
    state: false
}, {
    title: "App Icons",
    image: "https://storage.googleapis.com/pai-marketing/filters/appicon-style.jpg",
    prompt: "",
    state: false
}, {
    title: "Retro Futurism",
    image: "https://storage.googleapis.com/pai-marketing/filters/retrofuturism.png",
    prompt: "",
    state: false
}, {
    title: "Origamip",
    image: "https://storage.googleapis.com/pai-marketing/filters/origami.png",
    prompt: "",
    state: false
}, {
    title: "Black and white",
    image: "https://storage.googleapis.com/pai-marketing/filters/haze.png",
    prompt: "",
    state: false
}, {
    title: "None",
    image: "https://storage.googleapis.com/pai-marketing/filters/ominous_escape.png",
    prompt: "",
    state: true
}, {
    title: "Colorpop",
    image: "https://storage.googleapis.com/pai-marketing/filters/elizaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Instaport",
    image: "https://storage.googleapis.com/pai-marketing/filters/instaport_style.png",
    prompt: "",
    state: false
}, {
    title: "Playtoon",
    image: "https://storage.googleapis.com/pai-marketing/filters/pltn-style.png",
    prompt: "",
    state: false
}, {
    title: "Woolitize",
    image: "https://storage.googleapis.com/pai-marketing/filters/woolitize.jpeg",
    prompt: "",
    state: false
}, {
    title: "App Icons",
    image: "https://storage.googleapis.com/pai-marketing/filters/appicon-style.jpg",
    prompt: "",
    state: false
}, {
    title: "Retro Futurism",
    image: "https://storage.googleapis.com/pai-marketing/filters/retrofuturism.png",
    prompt: "",
    state: false
}, {
    title: "Origamip",
    image: "https://storage.googleapis.com/pai-marketing/filters/origami.png",
    prompt: "",
    state: false
}, {
    title: "Black and white",
    image: "https://storage.googleapis.com/pai-marketing/filters/haze.png",
    prompt: "",
    state: false
}];

export default OptFilter;