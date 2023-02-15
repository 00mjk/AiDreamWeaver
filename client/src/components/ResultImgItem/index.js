import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MasksIcon from '@mui/icons-material/Masks';
import NetworkLockedIcon from '@mui/icons-material/NetworkLocked';
import ImageIcon from '@mui/icons-material/Image';
import ScannerTwoToneIcon from '@mui/icons-material/ScannerTwoTone';
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';

import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "./resultimgitem.scss"

const ResultImgItem = (props) => {
    const { image, url } = props;
    return <>
        <div className="create-image-card">
            <img
                src={url}
                alt=""
                style={{ maxWidth: 'min(512px, 100%)' }} />
            <button className="btn-delete">
                <DeleteOutlineOutlinedIcon fontSize='small' /> Delete
            </button>

            <div style={{ position: 'absolute' }}>
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
                        tooltipPlacement="top"
                        onClick={() => alert("Clicked the item")}
                    >
                        <ImageIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Create Variations">
                        <ScannerTwoToneIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Print to T-shirt" tooltipPlacement="top">
                        <LocalPrintshopTwoToneIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Edit with mask">
                        <MasksIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Enhance photo">
                        <AddAPhotoIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Make it private">
                        <NetworkLockedIcon />
                    </CircleMenuItem>
                </CircleMenu>
            </div>
        </div>
    </>
}

export default ResultImgItem;