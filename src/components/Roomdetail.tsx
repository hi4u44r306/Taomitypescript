import React from "react";
import { Box, Button, Modal, Typography } from '@mui/material'
import BedIcon from '@mui/icons-material/Bed';
import SearchIcon from '@mui/icons-material/Search';
import '../pages/css/Room.css';

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:10,
  };
type RoomdetailProps = {
    img: string
    name: string;
    normal: string;
    holiday: string;
    describe: string;
};
export function Roomdetail({img, name, normal, holiday, describe}:RoomdetailProps){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        <div className="checkdetailbtn" onClick={handleOpen}><SearchIcon fontSize="small"/> 查看細節</div>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            className="roomdetail"
        >
            <Box sx={{ ...style, width: 400 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className='roomtitle'><BedIcon/> {name}</div>
            </Typography>
            <div className="d-flex justify-content-center">
                <img src={img} alt="room10"/>
            </div>
            <div className="normalprice">
                平日優惠價 : {normal}
            </div>
            <div className="holidayprice">
                假日優惠價 : {holiday}
            </div>
            <div className="describe">
                備註 : {describe}
            </div>
            <div className="closebtn" onClick={handleClose}>關閉視窗</div>
            </Box>
        </Modal>
        </React.Fragment>
    );
}