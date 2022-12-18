import React from "react";
import { Box, Modal} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import '../assets/css/PhotoBigHorz.css'
import closebtn from '../assets/img/closebtn.png'

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
};
export function PhotoBigHorizontal({img}:RoomdetailProps){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        <div className="photobighorzcheckdetailbtn" onClick={handleOpen}><SearchIcon fontSize="small"/></div>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ ...style }} className="photobighorzimgcontainer">
            <div className="d-flex justify-content-center">
                <img className="photobighorzimg" src={img} alt="room10"/>
            </div>
           
            <div className="photobighorzclosebtn" onClick={handleClose}>
                <img style={{width:"30px"}} src={closebtn} alt="closebtn"/> 關閉
            </div>
            </Box>
        </Modal>
        </React.Fragment>
    );
}