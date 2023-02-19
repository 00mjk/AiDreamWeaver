import { useState, useRef } from 'react';
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import MasksIcon from '@mui/icons-material/Masks';
import ImageIcon from '@mui/icons-material/Image';
// import ScannerTwoToneIcon from '@mui/icons-material/ScannerTwoTone';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';

import apiService from '../../services/apiService';
import ModalAIItem from '../ModalAIItem';
import ModalMockup from '../ModalMockup';
import ModalEnhance from '../ModalEnhance';
import CustomSnackbar from '../../components/CustomSnackbar';

import "./resultimgitem.scss"

const ResultImgItem = (props) => {
    // Props
    const { image, changeImg, url, remixImg } = props;
    // useRef
    const snapbarRef = useRef();

    // States
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [modalMockupOpen, setModalMockupOpen] = useState(false);
    const [modalEnhanceOpen, setModalEnhanceOpen] = useState(false);

    /**
     * @description
     *  Make image for private or public
     */
    const handlePrivateImg = () => {
        apiService.makeImgPrivOrPub(image).then(res => {
            changeImg(res.image);
            snapbarRef.current.showSnackbar({
                show: true,
                type: 'success',
                message: 'Image privacy updated.'
            });
        }).catch(err => {
            console.log(err)
            snapbarRef.current.showSnackbar({
                show: true,
                type: 'error',
                message: 'Image privacy update is failed.'
            });
        });
    }

    return <>
        <div className="create-image-card">
            <img
                src={url}
                alt=""
                style={{ maxWidth: 'min(512px, 100%)' }}
            />
            <button className="btn-delete">
                <DeleteOutlineOutlinedIcon fontSize='small' /> Delete
            </button>

            <div className={`wheel-menu`}>
                <CircleMenu
                    startAngle={90}
                    rotationAngle={360}
                    itemSize={3}
                    radius={7}
                    rotationAngleInclusive={false}
                    className={``}
                >
                    <CircleMenuItem
                        tooltip="Image Info"
                        onClick={() => setDetailModalOpen(true)}
                    >
                        <ImageIcon />
                    </CircleMenuItem>

                    {/* <CircleMenuItem
                        tooltip="Create Variations"
                    >
                        <ScannerTwoToneIcon />
                    </CircleMenuItem> */}

                    <CircleMenuItem
                        tooltip="Print to T-shirt"
                        onClick={() => setModalMockupOpen(true)}
                    >
                        <LocalPrintshopTwoToneIcon />
                    </CircleMenuItem>

                    {/* <CircleMenuItem
                        tooltip="Edit with mask"
                    >
                        <MasksIcon />
                    </CircleMenuItem> */}

                    <CircleMenuItem
                        tooltip="Enhance photo"
                        onClick={() => setModalEnhanceOpen(true)}
                    >
                        <AddAPhotoIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Make it private"
                        onClick={() => handlePrivateImg()}
                    >
                        {
                            image.is_private ? <PublicIcon /> : <PublicOffIcon />
                        }
                    </CircleMenuItem>
                </CircleMenu>
            </div>
        </div>
        <CustomSnackbar ref={snapbarRef} />
        <ModalAIItem open={detailModalOpen} onClose={() => setDetailModalOpen(false)} changeImage={changeImg} remixImage={remixImg} item={image} />
        <ModalMockup open={modalMockupOpen} onClose={() => setModalMockupOpen(false)} item={image} />
        <ModalEnhance open={modalEnhanceOpen} onClose={() => setModalEnhanceOpen(false)} item={image} />
    </>
}

export default ResultImgItem;