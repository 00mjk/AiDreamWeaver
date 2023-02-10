import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Grid, CircularProgress, Stack, Alert, AlertTitle, Divider } from '@mui/material';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import { MOCKUP_IMG_INITIAL, MOCKUP_IMG_START, MOCKUP_IMG_SUCCESS, MOCKUP_IMG_FAILED_GET, MOCKUP_IMG_FAILED_MAKE } from '../../actions/config';
import { setMockupChosenImgUrl, mockupImage } from '../../actions/mockupAction';

import VerSlider from '../../components/VerSlider';
import ResultImgItem from '../../components/ResultImgItem';
import ImgRadioButton from '../../components/ImgRadioButton';
import CustomSnackbar from '../../components/CustomSnackbar';

const MockupPage = () => {
    // useRef
    const snapbarRef = useRef();

    // Use Redux
    const dispatch = useDispatch();
    const aiObj = useSelector(state => state.aiObj)
    const mockupObj = useSelector(state => state.mockupObj)

    // Flags
    const [columns, setColumns] = useState(1);                  // Colum count to show image.
    const [initImg, setInitImg] = useState("");                 // Init image to mockup
    const [mockupTypeIdx, setMockupTypeIdx] = useState(0);            // MockupType Index
    const [mockupState, setMockupState] = useState(MOCKUP_IMG_INITIAL);

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

    useEffect(() => {
        setInitImg(mockupObj?.initImgUrl);
        setMokeupImgs(mockupObj?.mockups);
        setMockupState(mockupObj?.state);
    }, [mockupObj]);

    /**
     * @description
     *  Mock up image using mockup Type and give image.
     */
    const mockupImageByType = () => {
        console.log('--- mockupImageByType ---', mockupTypeIdx);
        if (initImg === "") {
            snapbarRef.current.showSnackbar({
                show: true,
                type: 'error',
                message: 'Please select image to mockup.'
            });
            return;
        }

        try {
            dispatch(mockupImage(mockupTypes[mockupTypeIdx], initImg));
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @description
     *  Generate and display mockup image items.
     */
    const getMockupImages = () => {
        if (mockupState === undefined || mockupState === null || mockupState === MOCKUP_IMG_INITIAL) {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }} >
                    <Alert severity="warning">
                        <AlertTitle>Pending</AlertTitle>
                        Please mockup a new image — <strong>Click the Mockup button!</strong>
                    </Alert>
                </Stack>
            </>
        } else if (mockupState === MOCKUP_IMG_START) {
            return <CircularProgress color='secondary' size={80} disableShrink={true} sx={{ marginTop: '5%' }} />
        } else if (mockupState === MOCKUP_IMG_SUCCESS) {
            return <div id="scroll-container" className="p-10 pt-5 ">
                <div style={{ display: 'flex', flexDirection: 'row', placeContent: 'stretch center', boxSizing: 'border-box', width: '100%', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start', flex: '1 1 0%', width: '0px', gap: '16px' }}>
                        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0px, 1fr))` }}>
                            {
                                mokeupImgs?.map((item, key) => <ResultImgItem key={key} url={item.mockup_url} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        } else if (mockupState === MOCKUP_IMG_FAILED_MAKE) {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Mockup image is failed. — <strong>Try it again!</strong>
                    </Alert>
                </Stack>
            </>
        } else if (mockupState === MOCKUP_IMG_FAILED_GET) {
            return <>
                <Stack sx={{ width: '70%', textAlign: 'left', marginLeft: '15%', marginTop: '5%' }}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Getting mockup image is failed. — <strong>Try it again!</strong>
                    </Alert>
                </Stack>
            </>
        }
    }

    return <>
        <div className="Layout_layout__main__2GVyJ fixed top-[calc(60px+env(safe-area-inset-top))] bottom-[env(safe-area-inset-bottom)] left-0 right-0 !mt-0 !min-h-0 bg-[#05020E] overflow-y-auto overflow-x-hidden dark-scrollbar select-none test-base lg:text-normal">
            <div className={`grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 text-white bg-[#05020E] h-[calc(100vh-62px)] border-t border-white/10 2xl:border-t-0 mx-auto 2xl:border-r`}>
                <aside id="left-sidebar" className="flex flex-col divide-y divide-white/10 pt-6 space-y-6 lg:overflow-y-auto">
                    <div className="px-6 space-y-6">
                        <fieldset className="create-fieldset">
                            <label >Mockup Images</label>
                            <Grid container spacing={2}>
                                {
                                    aiImages.map((image, key) => <ImgRadioButton url={image} key={key} checked={mockupObj.initImgUrl === image ? true : false} onChange={url => dispatch(setMockupChosenImgUrl(url))} />)
                                }
                            </Grid>
                        </fieldset>
                        <Divider />
                        <fieldset className="create-fieldset">
                            <label htmlFor="mockup-type">Mockup Type</label>
                            <div className="select">
                                <select name="mockup-type" id="mockup-type" onChange={(e) => {
                                    setMockupTypeIdx(e.target.value)
                                }}>
                                    {
                                        mockupTypes.map((mockupType, key) =>
                                            <option value={key} key={key}>{mockupType.productName}</option>
                                        )
                                    }
                                </select>
                                <ExpandMoreOutlinedIcon fontSize='small' />
                            </div>
                        </fieldset>
                    </div>
                    <div className="px-6 sticky z-10 pt-4 pb-2 space-y-4 bottom-0 bg-[#05020E]">
                        <Button variant="outlined" endIcon={<BrushOutlinedIcon />} onClick={() => mockupImageByType()}>Mock up</Button>
                    </div>
                </aside>
                <main className="xl:col-span-4 lg:col-span-3 lg:overflow-y-auto lg:overflow-x-hidden border-x border-white/10 relative">
                    <div className="relative w-full h-full" id="draggable-bounds">
                        <div className="sticky m-0 px-0 py-5 flex items-center justify-center top-0 z-[5] bg-[#05020E] border-b border-white/10 pl-4">
                            <div className="w-1/4 min-w-[250px] content-right ml-auto mr-10">
                                <VerSlider color={`primary`} label={`Columns`} value={columns} min={1} max={6} onChange={val => setColumns(val)} />
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

const mockupTypes = [{
    productName: "Men's shirt",
    productId: 71,
    variantIds: [4012, 4013, 4014, 4017, 4018, 4019],
    front: true,
    back: true
}, {
    productName: "Men's shirt (All-over shirts)",
    productId: 276,
    variantIds: [9050, 9053, 9052, 9050],
    front: true,
    back: true
},
// {
//     productName: "Men's shirt (Polo shirts)",
//     productId: 587,
//     variantIds: [15071, 15070, 15084, 15083],
//     front: false,
//     back: false
// }, 
{
    productName: "Men's shirt (Tank tops)",
    productId: 365,
    variantIds: [10402, 10442, 10427, 10397],
    front: true,
    back: true
},
{
    productName: "Men's shirt (3/4 sleeve shirts)",
    productId: 233,
    variantIds: [8159, 8162, 8321, 8331],
    front: true,
    back: false
},
{
    productName: "Men's shirt (Long sleeve shirts)",
    productId: 57,
    variantIds: [3457, 3458, 3459, 3458],
    front: true,
    back: true
},
{
    productName: "Men's shirt (Embroidered shirts)",
    productId: 12,
    variantIds: [565, 567, 566, 474],
    front: true,
    back: true
},
{
    productName: "Men's Jackets & vests",
    productId: 390,
    variantIds: [10878, 10879, 10881, 10877],
    front: true,
    back: true
},
// {
//     productName: "Mens' Hoodies & sweatshirts (Hoodies)",
//     productId: 475,
//     variantIds: [12320, 12299, 12319, 12299],
//     front: false,
//     back: true
// }, 
{
    productName: "Men's Hoodies & sweatshirts (Sweatshirts)",
    productId: 411,
    variantIds: [11258, 11261, 11256, 11247],
    front: true,
    back: true
},
// {
//     productName: "Men's Bottoms (Sweatpaints & joggers)",
//     productId: 412,
//     variantIds: [11269, 11280, 11278, 11267],
//     front: true,
//     back: true
// }, 
{
    productName: "Men's Bottoms (Underwear)",
    productId: 428,
    variantIds: [11446, 11447, 11448, 11448],
    front: true,
    back: false
},
// {
//     productName: "Men's Bottoms (Leggings)",
//     productId: 288,
//     variantIds: [9147, 9146, 9146, 9146],
//     front: true,
//     back: true
// }, 
{
    productName: "Men's Bottoms (Shorts)",
    productId: 571,
    variantIds: [14642, 14641, 14639, 14640],
    front: true,
    back: true
},
{
    productName: "Men's Bottoms (Pants)",
    productId: 604,
    variantIds: [15516, 15522, 15518, 15518],
    front: true,
    back: true
},
{
    productName: "Men's Swimwear",
    productId: 571,
    variantIds: [14642, 14641, 14639, 14640],
    front: true,
    back: true
},
{
    productName: "Women's Shirts (T-shirts)",
    productId: 110,
    variantIds: [4903, 4906, 4898, 4948],
    front: true,
    back: true
},
// {
//     productName: "Women's Shirts (All-over shirts)",
//     productId: 261,
//     variantIds: [8885, 8888, 8885, 8889],
//     front: true,
//     back: true
// }, 
{
    productName: "Women's Shirts (Tank tops)",
    productId: 163,
    variantIds: [6678, 6655, 6666, 6681],
    front: true,
    back: true
},
{
    productName: "Women's Shirts (Cropt tops)",
    productId: 187,
    variantIds: [7319, 7320, 7317, 7320],
    front: true,
    back: true
},
{
    productName: "Women's Shirt (Embroidered shirts)",
    productId: 110,
    variantIds: [4903, 4906, 4898, 4948],
    front: true,
    back: true
},
{
    productName: "Women's Shirt (3/4 sleeve shirts)",
    productId: 233,
    variantIds: [8159, 8162, 8321, 8331],
    front: true,
    // back: true
},
{
    productName: "Women's Shirt (Long sleeve shirts)",
    productId: 302,
    variantIds: [9339, 9335, 9335, 9333],
    front: true,
    back: true
},
// {
//     productName: "Women's Dresses",
//     productId: 198,
//     variantIds: [7791, 7789, 7792, 7791],
//     front: true,
//     back: true
// }, 
{
    productName: "Women's Swimwear",
    productId: 272,
    variantIds: [9014, 9016, 9014, 9020],
    front: true,
    back: true
},
{
    productName: "Women's Sports bras",
    productId: 387,
    variantIds: [10859, 10859, 10865, 10859],
    front: true,
    back: true
    // Just Done.
},
{
    productName: "Women's Hoodies & sweatshirts (Hoodies)",
    productId: 475,
    variantIds: [12320, 12299, 12319, 12299],
    front: true,
    back: true
}, {
    productName: "Women's Hoodies & sweatshirts (Sweatshirts)",
    productId: 506,
    variantIds: [12732, 12701, 12696, 12697],
    front: true,
    back: true
}, {
    productName: "Women's Jackets & vests",
    productId: 540,
    variantIds: [13548, 13540, 13544, 13549],
    front: true,
    back: true
}, {
    productName: "Women's Bottoms (Sweatpants & joggers)",
    productId: 412,
    variantIds: [1269, 11280, 11278, 11267],
    front: true,
    back: true
}, {
    productName: "Women's Bottoms (Leggings)",
    productId: 242,
    variantIds: [8356, 8355, 8354, 8355],
    front: true,
    back: true
}, {
    productName: "Women's Bottoms (Skirts)",
    productId: 314,
    variantIds: [9610, 9606, 9606, 9612],
    front: true,
    back: true
}, {
    productName: "Women's Bottoms (Shorts)",
    productId: 281,
    variantIds: [9081, 9081, 9081, 9081],
    front: true,
    back: true
}, {
    productName: "Women's Bottoms (Pants)",
    productId: 618,
    variantIds: [15744, 15745, 15742, 15747],
    front: true,
    back: true
}, {
    productName: "Women's Robes",
    productId: 527,
    variantIds: [13305, 13305, 13306],
    front: true,
    back: true
}, {
    productName: "Kids & youth's' All kids & youth clothing",
    productId: 511,
    variantIds: [12863, 12869, 12855, 12854],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Shirts (T-shirts)",
    productId: 306,
    variantIds: [9425, 9421, 9418, 10301],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Shirts (All-over shirts)",
    productId: 385,
    variantIds: [10829, 10826, 10824, 10826],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Shirts (3/4 sleeve shirts)",
    productId: 453,
    variantIds: [11778, 11779],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Shirts (Long sleeve shirts)",
    productId: 511,
    variantIds: [12863, 12869, 12855, 12854],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Jackets",
    productId: 436,
    variantIds: [11524, 11527, 11528, 11527],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Hoodles",
    productId: 370,
    variantIds: [10473, 10502, 10481, 10502],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Hats",
    productId: 429,
    variantIds: [11458, 11458, 11456, 11459],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Leggings",
    productId: 323,
    variantIds: [9704, 9704, 9707, 9706],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Body bodysuits",
    productId: 308,
    variantIds: [9439, 9441, 10333, 9450],
    front: true,
    back: true
}, {
    productName: "Kids&youth's Swimwear",
    productId: 345,
    variantIds: [9968, 9970, 9969, 9969],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Beanies)",
    productId: 81,
    variantIds: [4522, 4522, 4522, 4522],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Dad hats)",
    productId: 491,
    variantIds: [12691, 12690, 12689, 12692],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Snapbacks)",
    productId: 99,
    variantIds: [4802, 4807, 4792, 7842],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Trucker hats)",
    productId: 100,
    variantIds: [4813, 4812, 4812, 4819],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (5-panel hats)",
    productId: 92,
    variantIds: [4627, 4622, 4628, 4623],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Mesh hats)",
    productId: 252,
    variantIds: [8749, 8747, 8747, 8754],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Bucket hats)",
    productId: 379,
    variantIds: [10735, 10735, 10735, 10735],
    front: true,
    back: true
}, {
    productName: "Hats's All hats (Visors)",
    productId: 265,
    variantIds: [8913, 8916, 8913, 8913],
    front: true,
    back: true
}, {
    productName: "Accessories's Patches",
    productId: 516,
    variantIds: [15560, 12983, 12981, 12981],
    front: true,
    back: true
}, {
    productName: "Accessories's Bags",
    productId: 262,
    variantIds: [8894, 8894, 8894, 8894],
    front: true,
    back: true
}, {
    productName: "Accessories's Hair accessories",
    productId: 545,
    variantIds: [13082, 13082, 13082, 13082, 13082],
    front: true,
    back: true
}, {
    productName: "Accessories's Face masks",
    productId: 630,
    variantIds: [16033, 16033, 16033, 16032],
    front: true,
    back: true
}, {
    productName: "Accessories's Foot wear",
    productId: 502,
    variantIds: [12679, 12679, 12678, 12674],
    front: true,
    back: true
}, {
    productName: "Accessories's Tech accessories",
    productId: 181,
    variantIds: [11703, 13427, 11704, 9621],
    front: true,
    back: true
}, {
    productName: "Home&living's Puzzles",
    productId: 534,
    variantIds: [13432, 13432, 13432, 13432],
    front: true,
    back: true
}, {
    productName: "Home&living's Wall art",
    productId: 588,
    variantIds: [15137, 15137, 15137, 15134],
    front: true,
    back: true
}, {
    productName: "Home&living's Home decor",
    productId: 645,
    variantIds: [16270, 16270, 16270, 16270],
    front: true,
    back: true
}, {
    productName: "Home&living's Drinkware&coasters",
    productId: 19,
    variantIds: [1320, 4830, 1320, 1320],
    front: true,
    back: true
}, {
    productName: "Home&living's Stationery",
    productId: 518,
    variantIds: [13097, 13097, 13097, 13097],
    front: true,
    back: true
}, {
    productName: "Home&living's Aprons",
    productId: 297,
    variantIds: [9286, 9287, 9286, 9287],
    front: true,
    back: true
}, {
    productName: "Home&living's Fabrics",
    productId: 524,
    variantIds: [13217, 13217, 13217, 13217],
    front: true,
    back: true
}, {
    productName: "Home&living's Towels",
    productId: 259,
    variantIds: [8874, 8874, 8874, 8874],
    front: true,
    back: true
}, {
    productName: "Home&living's Pet products",
    productId: 630,
    variantIds: [16033, 16033, 16033, 16032],
    front: true,
    back: true
}];

export default MockupPage;