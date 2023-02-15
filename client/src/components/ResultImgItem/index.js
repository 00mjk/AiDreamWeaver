import { useState } from 'react';
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MasksIcon from '@mui/icons-material/Masks';
import NetworkLockedIcon from '@mui/icons-material/NetworkLocked';
import ImageIcon from '@mui/icons-material/Image';
import ScannerTwoToneIcon from '@mui/icons-material/ScannerTwoTone';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';

import ItemDetailModal from '../ItemDetailModal';
import MockupModal from '../MockupModal';

import "./resultimgitem.scss"

const ResultImgItem = (props) => {
    // Props
    const { image, url } = props;

    // States
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [mockupModalOpen, setMockupModalOpen] = useState(false);

    const handleImageInfo = () => {
        setDetailModalOpen(true);
    }

    const handlePrintModal = () => {
        setMockupModalOpen(true);
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
                        onClick={handleImageInfo}
                    >
                        <ImageIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Create Variations"
                    >
                        <ScannerTwoToneIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Print to T-shirt"
                        onClick={handlePrintModal}
                    >
                        <LocalPrintshopTwoToneIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Edit with mask"
                    >
                        <MasksIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Enhance photo"
                    >
                        <AddAPhotoIcon />
                    </CircleMenuItem>

                    <CircleMenuItem
                        tooltip="Make it private"
                    >
                        <NetworkLockedIcon />
                    </CircleMenuItem>
                </CircleMenu>
            </div>
        </div>
        <ItemDetailModal open={detailModalOpen} onClose={() => setDetailModalOpen(false)} item={image} />
        <MockupModal open={mockupModalOpen} onClose={() => setMockupModalOpen(false)} item={image} />
    </>
}

export default ResultImgItem;