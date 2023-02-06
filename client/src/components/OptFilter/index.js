import { useState } from "react";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import SearchIcon from '@mui/icons-material/Search';

const OptFilter = (props) => {
    const [showFilterBox, setShowFilterBox] = useState(false);

    return <>
        <fieldset className="create-fieldset">
            <label htmlFor="filter-select">Filter</label>
            <p>Experiment with different styles that can be applied to your image.</p>
            <div aria-hidden="true">
                <div
                    className="select"
                    onClick={() => setShowFilterBox(!showFilterBox)}>
                    <button type="button" className="psuedo-select text-left">None</button>
                    <ExpandMoreOutlinedIcon fontSize="small" />
                </div>
                <div className="absolute pointer-events-none bottom-2 flex w-screen flex-col lg:w-[400px]" style={{ maxHeight: '80vh', left: '393.594px', top: 'min(850px - min(1545.53px, 80vh), 526.656px)' }}>
                    <div className={`scrollbar-hide pai-border z-50 overflow-auto rounded-lg bg-gray-95 shadow-2xl transition-[transform,opacity] duration-[50ms] pointer-events-none ${showFilterBox ? '' : 'opacity-0'} -translate-x-2`}>
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
                            <button className={`filter-button relative aspect-[6/5] origin-center overflow-hidden rounded-lg border-2 transition-[transform,opacity] duration-200 scale-90 ${showFilterBox ? '' : 'opacity-0'} active:border-blue-300/50 border-blue-300" aria-label="Select filter style: None`} style={{ transitionDelay: '0ms' }}>
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-2">
                                    None</div>
                                <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-gray-90">
                                    <ExpandMoreOutlinedIcon fontSize='small' /></div>
                            </button>
                            <button className={`filter-button relative aspect-[6/5] origin-center overflow-hidden rounded-lg border-2 transition-[transform,opacity] duration-200 scale-90 ${showFilterBox ? '' : 'opacity-0'} active:border-blue-300/50 border-transparent hover:border-high`} aria-label="Select filter style: Black and white (3D)" style={{ transitionDelay: '360ms' }}>
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
    </>
}

export default OptFilter;