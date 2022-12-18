import React from "react";
import { Box, Button, Modal, Typography } from '@mui/material'
import BedIcon from '@mui/icons-material/Bed';
import SearchIcon from '@mui/icons-material/Search';
import '../pages/css/PhotoBig.css';

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:10,
  };
type RoomdetailProps = {
    img: string
    name: string
};
export function Roomdetail({img, name}:RoomdetailProps){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        <div className="roomcheckdetailbtn" onClick={handleOpen}><SearchIcon fontSize="small"/></div>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            className="photobigroomdetail"
        >
            <Box sx={{ ...style }} className="roomimgcontainer">
            <div className="d-flex justify-content-center">
                <img className="roomimg" src={img} alt="room10"/>
            </div>
           
            <div className="roomclosebtn" onClick={handleClose}>關閉視窗</div>
            </Box>
        </Modal>
        </React.Fragment>
    );
}