import { useState } from "react";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import SearchIcon from '@mui/icons-material/Search';

import OptFilterItem from "../OptFilterItem";

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
        <fieldset className="create-fieldset">
            <label htmlFor="filter-select">Filter</label>
            {/* <p>Experiment with different styles that can be applied to your image.</p> */}
            <div aria-hidden="true">
                <div
                    className="select"
                    onClick={() => setShowFilterBox(!showFilterBox)}>
                    <button type="button" className="psuedo-select text-left">None</button>
                    <ExpandMoreOutlinedIcon fontSize="small" />
                </div>
                <div className="absolute pointer-events-none bottom-2 flex w-screen flex-col lg:w-[400px]" style={{ maxHeight: '80vh', left: '250.594px', top: 'min(850px - min(1545.53px, 80vh), 526.656px)' }}>
                    <div className={`scrollbar-hide pai-border z-50 overflow-auto rounded-lg bg-gray-95 shadow-2xl transition-[transform,opacity] duration-[50ms] pointer-events-none ${showFilterBox ? '' : 'opacity-0'} -translate-x-2`}>
                        <div className="absolute z-50 w-[calc(100%-2px)] items-center space-y-2 overflow-hidden rounded-t-lg border-b border-low bg-inherit px-4 pb-2 pt-4 lg:pt-2">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-white">Filter</h3>
                                <button className="pb-1 text-gray-600 lg:hidden">
                                    <ExpandCircleDownOutlinedIcon fontSize="small" />
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input pai-border mb-2 w-full rounded-md bg-gray-95 p-2 pl-8 outline-none"
                                    onChange={(e) => window.alert(e.target.value)}
                                />
                                <span className="absolute left-2 top-2.5 text-gray-500">
                                    <SearchIcon fontSize='small' />
                                </span>
                            </div>
                        </div>
                        <div className="h-32 lg:h-28" />
                        <div className="grid grid-cols-3 gap-2 p-2 pt-0 sm:grid-cols-4 lg:grid-cols-3">
                            {
                                filters.map((filter, key) => (
                                    <OptFilterItem
                                        item={filter}
                                        idx={key}
                                        key={key} 
                                        onClick={() => window.alert(key)}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <select id="filter-select" className="sr-only absolute top-0 left-0">
                {
                    filters.map((filter, key) => <option value={key} key={key} className="text-black">{filter.title}</option>)
                }
            </select>
        </fieldset>
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
}];

export default OptFilter;