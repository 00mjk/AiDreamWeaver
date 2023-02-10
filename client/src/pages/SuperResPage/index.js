import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Slider, Grid, CircularProgress, Stack, Alert, AlertTitle, Divider } from '@mui/material';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

import { MOCKUP_IMG_INITIAL, MOCKUP_IMG_START, MOCKUP_IMG_SUCCESS, MOCKUP_IMG_FAILED_GET, MOCKUP_IMG_FAILED_MAKE } from '../../actions/config';
import { setMockupChosenImgUrl, mockupImage } from '../../actions/mockupAction';
import { makeSuperResolution } from '../../actions/aiAction';

import ImgRadioButton from '../../components/ImgRadioButton';
import CustomSnackbar from '../../components/CustomSnackbar';
import OptSlider from '../../components/OptSlider';

const SuperResolutionPage = () => {
    // useRef
    const snapbarRef = useRef();

    // Use Redux
    const dispatch = useDispatch();
    const aiObj = useSelector(state => state.aiObj)

    // Flags
    const [columns, setColumns] = useState(1);                  // Colum count to show image.
    const [initImg, setInitImg] = useState("");                 // Initial image to make super resolution
    const [scale, setScale] = useState(1);                      // Scale

    // Generated Images
    const [aiImages, setAiImages] = useState([]);
    const [mokeupImgs, setMokeupImgs] = useState([]);

    useEffect(() => {
        // Set images to mockup
        if (aiObj?.results?.output?.length > 0) {
            var tempImgs = [];
            var len = aiObj?.results?.output?.length;
            for (var i = 0; i < len; i++)
                tempImgs.push(aiObj?.results?.output[i]);

            setAiImages(tempImgs);
        }
    }, [aiObj]);

    // useEffect(() => {
    //     setInitImg(mockupObj?.initImgUrl);
    //     setMokeupImgs(mockupObj?.mockups);
    //     setMockupState(mockupObj?.state);
    // }, [mockupObj]);


    /**
     * @description
     *  Generate super resolution image using api
     */
    const handleSupResolution = () => {
        console.log("--------------- handleSupResolution --------------");
        if (initImg === "") {
            snapbarRef.current.showSnackbar({
                show: true,
                type: 'success',
                message: 'Please select image to mockup.'
            });
            return;
        }

        try {
            const settings = {
                "key": "iIjvdXCYHvVOuemfFgGH9JXSsVwl3grN7ZPtGGGAxY1g32kayxq1SVB3s08A",
                "url": initImg,
                "scale": scale,
                "webhook": null,
                "face_enhance": false
            };

            dispatch(makeSuperResolution(settings)).then(res => {

            }).catch(err => {
                console.log("makeSuperResolution - Err", err);
            });
        } catch (err) {
            console.log("handleSupResolution - Err", err)
        };
    }

    /**
     * @description
     *  Generate and display mockup image items.
     */
    const getMockupImages = () => {

        // if (mockupState === undefined || mockupState === null || mockupState === MOCKUP_IMG_INITIAL) {
        //     return <>
        //         <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }} >
        //             <Alert severity="warning">
        //                 <AlertTitle>Pending</AlertTitle>
        //                 Please mockup a new image — <strong>Click the Mockup button!</strong>
        //             </Alert>
        //         </Stack>
        //     </>
        // } else if (mockupState === MOCKUP_IMG_START) {
        //     return <CircularProgress color='secondary' size={80} disableShrink={true} sx={{ marginTop: '5%' }} />
        // } else if (mockupState === MOCKUP_IMG_SUCCESS) {
        //     return <div id="scroll-container" className="p-10 pt-5 ">
        //         <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
        //             <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
        //                 <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
        //                     {
        //                         mokeupImgs?.map((item, key) => <MockupImgItem key={key} item={item} />)
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // } else if (mockupState === MOCKUP_IMG_FAILED_MAKE) {
        //     return <>
        //         <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
        //             <Alert severity="error">
        //                 <AlertTitle>Error</AlertTitle>
        //                 Mockup image is failed. — <strong>Try it again!</strong>
        //             </Alert>
        //         </Stack>
        //     </>
        // } else if (mockupState === MOCKUP_IMG_FAILED_GET) {
        //     return <>
        //         <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
        //             <Alert severity="error">
        //                 <AlertTitle>Error</AlertTitle>
        //                 Getting mockup image is failed. — <strong>Try it again!</strong>
        //             </Alert>
        //         </Stack>
        //     </>
        // }
    }

    return <>
        <div className="Layout_layout__main__2GVyJ fixed top-[calc(60px+env(safe-area-inset-top))] bottom-[env(safe-area-inset-bottom)] left-0 right-0 !mt-0 !min-h-0 bg-[#05020E] overflow-y-auto overflow-x-hidden dark-scrollbar select-none test-base lg:text-normal">
            <div className={`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 text-white bg-[#05020E] h-[calc(100vh-62px)] border-t border-white/10 2xl:border-t-0 mx-auto 2xl:border-r`}>
                <aside id="left-sidebar" className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                    <div className="px-6 space-y-6">
                        <fieldset className="create-fieldset">
                            <label >Images</label>
                            <Grid container spacing={2}>
                                {
                                    aiImages.map((image, key) => <ImgRadioButton url={image} key={key} onChange={url => dispatch(setMockupChosenImgUrl(url))} />)
                                }
                            </Grid>
                        </fieldset>
                        <Divider light />
                        <OptSlider min={1} max={6} label={`Image Scale`} scale={scale} color={`primary`} onChange={(val) => setScale(val)} />
                    </div>
                    <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                        <Button variant="outlined" endIcon={<GavelOutlinedIcon />} onClick={handleSupResolution}>Super Resolution</Button>
                    </div>
                </aside>
                <main className="xl:col-span-4 lg:col-span-3 lg:overflow-y-auto lg:overflow-x-hidden border-x border-white/10 relative">
                    <div className="relative w-full h-full" id="draggable-bounds">
                        <div className="sticky m-0 px-0 py-5 flex items-center justify-center top-0 z-[5] bg-[#05020E] border-b border-white/10 pl-4">
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
                                            onChange={(e) => setColumns(e.target.value)}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {getMockupImages()}
                    </div>
                </main>
            </div>
            <CustomSnackbar ref={snapbarRef} />
        </div>
    </>
}

export default SuperResolutionPage;