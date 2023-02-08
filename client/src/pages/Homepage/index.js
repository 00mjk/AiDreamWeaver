import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';

import { searchImgsByKey, getImageById } from "../../actions/imgAction";
import ItemDetailModal from '../../components/ItemDetailModal';
import styles from './homepage.module.css';

export default function Homepage() {
    // Use Redux
    const dispatch = useDispatch()
    const image = useSelector(state => state.img)

    // States
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleImage = (imgItem) => {
        setDetailModalOpen(true);
        setSelectedItem(imgItem);

        dispatch(getImageById({ imageId: imgItem._id }));
    }

    useEffect(() => {
        dispatch(searchImgsByKey(image.imgSchKeyword));
    }, [])

    return (<>
        <ImageList variant="masonry" cols={5} gap={10} style={{ margin: '10px' }}>
            {image?.images?.map((item, key) => (
                <ImageListItem key={key} className={styles.imagelistitem} onClick={() => { handleImage(item) }}>
                    <img
                        src={`${item.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.user_name}
                        subtitle={item.name}
                        className={styles.imgdesc}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.user_name}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
        <ItemDetailModal open={detailModalOpen} onClose={() => setDetailModalOpen(false)} item={selectedItem} />
    </>
    );
}

const itemData = [
    {
        img: 'https://storage.googleapis.com/pai-images/9dbd3eb1584d4db281f52ec4d1bfa572.jpeg',
        prompt: 'ice cube, melting, blue, cartoony, fun, trending on artstation, sharp focus, studio photo, intricate details, highly detailed, by greg rutkowski',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/4c13aadcdba64dec906541a7fe4f1646.jpeg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/9dbd3eb1584d4db281f52ec4d1bfa572.jpeg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/5b4f287b302e46c0b8fee6de8ce2a6ea.jpeg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/07e05dc881f74d279a99a5c007dba284.jpeg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/7e8a86b038074e59858724ecd64d1a73.jpeg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/7fd6de1166b54ea9bdcc4b11e1e6cfa2.jpeg',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/8b3284f29b034dfea95db8e21afbd2ce.jpeg',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/8be90a2c2c904bdd9377ac945876638d.jpeg',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/9dbd3eb1584d4db281f52ec4d1bfa572.jpeg',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/38dcb8a21df74c7987118b29e87fbcaf.jpeg',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/68b45029424c4ae8acd59273b1cefacf.jpeg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/385d8b182f094783a19cd1c396623577.jpeg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/782a0a829607455cadca3d054815f4ad.jpeg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/3069b9f9b50542a3a50b95ea0bd9f5d2.jpeg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/8282f50ccd3d4737a116e684fc538315.jpeg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/9373c98ee9dc4d1cbb801fa5474449df.jpeg',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/832155f5aaae4531814f8e5bffe2020e.jpeg',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/aad81e92914247ad83fdb25c365d7291.jpeg',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/b15a7587b5624eeab9a9786d0f01e61a.jpeg',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://storage.googleapis.com/pai-images/b63bf9c966154c8d86b8b937e5beb53c.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/c1fd97bc7ff2483e8d8b24ccfffa560c.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/c7957c52153e4b52ac151032f04ee526.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/c08759f39b3e4876bd53ff61975dd380.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/dd13c3bf3ac343f68aab67ef6a8467cf.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e15dbf31460e49d8be162c2b6b46d963.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e36a68a77943408da5dd3652fe873384.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e279aae214f34a6daaf9ab549f46e11e.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e633d3907df749a18ff111c767f69527.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e2510cccc92543cd971324be9314d34d.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/e3627006174d4432a1b6a63a691b467e.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/ede7238d553d4825870405c0b005b352.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/eeaf171267b44abf95865be43735f4df.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/f7e975e087064b56be03e377807d3b6e.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/f9a3295c9733493b80238953b01c3511.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
    {
        img: 'https://storage.googleapis.com/pai-images/fe307419466c4bafb161af9bbe7220f8.jpeg',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];
