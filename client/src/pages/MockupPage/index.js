import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

import { Button, Slider, CircularProgress, Alert, AlertTitle, Stack } from '@mui/material';

import ShirtService from '../../services/shirtService';
import GenImgItem from '../../components/GenImgItem';
import MockupImgItem from '../../components/MockupImgItem';

import { createImg } from '../../actions/imgAction';

const MockupPage = () => {

    // Use Redux
    const dispatch = useDispatch();
    const toCreate = useSelector(state => state.toCreate)

    // Flags
    const [apiCallFlag, setApiCallFlag] = useState("pending");  // Generate Api call state (pending, loading, processing, created)
    const [rightSidebar, setRightSidebar] = useState(false);    // Rite sidebar state
    const [columns, setColumns] = useState(1);                  // Colum count to show image.

    // Generated Images
    const [images, setImages] = useState([]);
    const [mokeupImgs, setMokeupImgs] = useState([]);

    useEffect(() => {
    }, []);

    /**
     * @description
     *  Control image count to display.
     */
    const handleColumnChange = (event, newValue) => {
        setColumns(newValue);
    }

    /**
     * @description
     *  Get Image of t-shirt using api
     */
    const handleGetTshirt = async (shirtService, taskKey) => {
        await shirtService.getTShirt(taskKey)
            .then((res) => {
                console.log("1234");
                if (res.code === 200 && res.result.status === "completed") {
                    console.log(res.result);
                    setMokeupImgs(res.result.mockups);
                }
            })
            .catch(err => console.log(err))
    }

    /**
     * @description
     *  Print Image in t-shirt using api
     */
    const handlePrintShirt = async () => {
        console.log('--- handlePrintShirt ---');

        try {
            const shirtService = new ShirtService();
            let taskKey = "";
            let createCode = 400;

            await shirtService.createTShirt(71, images).then((res) => {
                createCode = res.code;
                if (createCode === 200) {
                    taskKey = res.result.task_key;
                }
            }).catch(err => console.log(err));

            if (createCode !== 200)
                return;

            setTimeout(() => handleGetTshirt(shirtService, taskKey), 20000)
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @description
     *  Generate and display image items which are created by api.
     */
    const getCreatedImages = () => {
        if (apiCallFlag === "pending") {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }} >
                    <Alert severity="warning">
                        <AlertTitle>Pending</AlertTitle>
                        Please generate a new image — <strong>Click the Generate button!</strong>
                    </Alert>
                </Stack>
            </>
        } else if (apiCallFlag === "loading") {
            return <CircularProgress color='secondary' size={80} disableShrink={true} sx={{ marginTop: '5%' }} />
        } else if (apiCallFlag === "processing") {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Processing — <strong>Try it again!</strong>
                    </Alert>
                </Stack>
            </>
        } else if (apiCallFlag === "created") {
            return <div id="scroll-container" className="p-10 pt-5 ">
                <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
                        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                            {
                                images.map((url, key) => <GenImgItem key={key} url={url} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    /**
     * @description
     *  Generate and display mockup image items.
     */
    const getMockupImages = () => {
        return <div id="scroll-container" className="p-10 pt-5 ">
            <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
                    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                        {
                            mokeupImgs.map((item, key) => <MockupImgItem key={key} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    }

    return <>
        <div className="Layout_layout__main__2GVyJ fixed top-[calc(60px+env(safe-area-inset-top))] bottom-[env(safe-area-inset-bottom)] left-0 right-0 !mt-0 !min-h-0 bg-[#05020E] overflow-y-auto overflow-x-hidden dark-scrollbar select-none test-base lg:text-normal">
            <div className={`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 text-white bg-[#05020E] h-[calc(100vh-62px)] border-t border-white/10 2xl:border-t-0 mx-auto 2xl:border-${!rightSidebar ? "x" : "r"}`}>
                <aside id="left-sidebar" className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                    <div className="px-6 space-y-6">
                    </div>
                    <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                        <Button variant="outlined" endIcon={<BrushOutlinedIcon />} onClick={handlePrintShirt}>Print on T-Shirt</Button>
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
                                            max={10}
                                            onChange={handleColumnChange}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        {getMockupImages()}
                    </div>
                </main>
            </div>
        </div>
    </>
}

export default MockupPage;