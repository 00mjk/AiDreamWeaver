import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { styled } from '@mui/material/styles';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Flag from "react-flagkit";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import "./resultimgitem.scss"

const menuItems = [
    {
        id: 'walk',
        title: 'Walk',
        icon: '#walk'
    },
    {
        id: 'run',
        title: 'Run',
        icon: '#run'
    },
    {
        id: 'drive',
        title: 'Drive',
        icon: '#drive'
    },
    {
        id: 'figth',
        title: 'Fight',
        icon: '#fight'
    },
    {
        id: 'more',
        title: 'More...',
        icon: '#more',
        items: [
            {
                id: 'eat',
                title: 'Eat',
                icon: '#eat'
            },
            {
                id: 'sleep',
                title: 'Sleep',
                icon: '#sleep'
            },
            {
                id: 'shower',
                title: 'Take Shower',
                icon: '#shower'
            },
            {
                id: 'workout',
                icon: '#workout',
                title: 'Work Out'
            }
        ]
    },
    {
        id: 'weapon',
        title: 'Weapon...',
        icon: '#weapon',
        items: [
            {
                id: 'firearm',
                icon: '#firearm',
                title: 'Firearm...',
                items: [
                    {
                        id: 'glock',
                        title: 'Glock 22'
                    },
                    {
                        id: 'beretta',
                        title: 'Beretta M9'
                    },
                    {
                        id: 'tt',
                        title: 'TT'
                    },
                    {
                        id: 'm16',
                        title: 'M16 A2'
                    },
                    {
                        id: 'ak47',
                        title: 'AK 47'
                    }
                ]
            },
            {
                id: 'knife',
                icon: '#knife',
                title: 'Knife'
            },
            {
                id: 'machete',
                icon: '#machete',
                title: 'Machete'
            }, {
                id: 'grenade',
                icon: '#grenade',
                title: 'Grenade'
            }
        ]
    }
];

const ResultImgItem = (props) => {
    return <>
        <div className="create-image-card">
            <img
                src={props.url}
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
                        onClick={() => alert("Clicked the item")}
                        tooltip="Email"
                        tooltipPlacement="right"
                    >
                        <AcUnitIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Help">
                        <AccountBalanceIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Location" tooltipPlacement="top">
                        <AddAPhotoIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                        <AddAPhotoIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                        <AddAPhotoIcon />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                        <AddAPhotoIcon />
                    </CircleMenuItem>
                </CircleMenu>
            </div>
        </div>
    </>
}

export default ResultImgItem;