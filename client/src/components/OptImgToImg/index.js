import { Uploader } from "uploader";

import Slider from '@mui/material/Slider';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const OptImgToImg = (props) => {

    const uploader = Uploader({ apiKey: "public_12a1xwtEa8mo7SAR7zFgupFbnQpV" }); // Your real API key.

    /**
     * @description
     *  Load init image.
     */
    const loadInitImg = () => {
        uploader.open({ maxFileCount: 1 }).then(
            files => {
                const fileUrl = files.map(x => x.fileUrl).join("\n");
                console.log(fileUrl);
                props.onSetInitImg(fileUrl);
            },
            error => {
                console.log(error);
            }
        );
    }

    return <>
        <fieldset className="create-fieldset">
            <label>Image to Image</label>
            {/* <p>Upload or draw an image to use as inspiration.</p> */}
            <fieldset>
                <div className="image-to-image">
                    {
                        props.img === "" ?
                            <div className="file-upload flex flex-row justify-center">
                                <div className="mr-3">
                                    <label>
                                        {/* <input className="hidden" type="file" accept="image/*" /> */}
                                        <AddCircleOutlineIcon onClick={() => { loadInitImg() }} />
                                    </label>
                                </div>
                                {/* <div className="h-1/4 w-px bg-zinc-400" /> */}
                                {/* <button title="Brush" className="ml-3 disabled:opacity-50">
                                                        <CreateOutlinedIcon />
                                                    </button> */}
                            </div>
                            :
                            <>
                                <div className="image-to-image-container relative mb-4 w-32 rounded-md">
                                    <img src={props.img} alt="Initial" />
                                    <div className="absolute inset-0 flex flex-col opacity-0 hover:opacity-100">
                                        <button
                                            title="Remove initial image"
                                            className="image-to-image-remove-button blur-card absolute top-1 right-1 flex h-8 w-8 items-center justify-center rounded-full !bg-black/40 text-white transition-colors hover:text-red-500"
                                            onClick={() => props.onSetInitImg("")}>
                                            <DeleteOutlineOutlinedIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div>
                                        <label className="text-sm">Image strength</label>
                                        <div id="slider-undefined" className="flex items-center gap-x-4 slider-container">
                                            <Slider
                                                size="small"
                                                aria-label="Small"
                                                valueLabelDisplay="auto"
                                                min={0}
                                                max={100}
                                                color="secondary"
                                                value={props.strength}
                                                onChange={e => props.onSetStrength(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="w-12 rounded-full bg-gray-90 text-xs text-center py-1 text-gray-200 "
                                                value={props.strength}
                                                onChange={e => props.onSetStrength(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="relative">
                                        <button className="flex gap-[1px] rounded-md p-1 pl-2 text-white">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.61 8C14.61 12.0332 11.4788 15.25 7.68 15.25C3.88123 15.25 0.75 12.0332 0.75 8C0.75 3.96679 3.88123 0.75 7.68 0.75C11.4788 0.75 14.61 3.96679 14.61 8Z" stroke="currentColor" strokeWidth="1.5" />
                                                <mask id="mask0_2_26" maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16} style={{ maskType: 'alpha' }}>
                                                    <ellipse cx="8.32001" cy={8} rx="7.68" ry={8} fill="currentColor" />
                                                </mask>
                                                <g mask="url(#mask0_2_26)">
                                                    <ellipse cx="1.91999" cy={8} rx="7.68" ry={8} fill="currentColor" />
                                                </g>
                                            </svg>
                                            <svg data-testid="geist-icon" fill="none" height={16} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24} className="text-gray-50">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                            <span className="sr-only">Open dropdown</span>
                                        </button>
                                    </div>
                                    <button className="flex flex-row place-items-center gap-2 font-medium hover:text-gray-300 disabled:opacity-50 [&>svg]:inline [&>svg]:align-sub" style={{ fontSize: '0.9rem' }}>Edit with Mask</button>
                                </div>
                            </>
                    }
                </div>
            </fieldset>
        </fieldset>
    </>
}

export default OptImgToImg;