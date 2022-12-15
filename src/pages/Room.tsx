import React from 'react'
import titleword from '.././assets/img/titleword.jpg'
import room1 from '.././assets/img/roompic01.jpg'
import room2 from '.././assets/img/roompic02.jpg'
import room3 from '.././assets/img/roompic03.jpg'
import room4 from '.././assets/img/roompic04.jpg'
import room5 from '.././assets/img/roompic05.jpg'
import room6 from '.././assets/img/roompic06.jpg'
import room7 from '.././assets/img/roompic07.jpg'
import room8 from '.././assets/img/roompic08.jpg'
import room9 from '.././assets/img/roompic09.jpg'
import room10 from '.././assets/img/roompic10.jpg'
import facility1 from '.././assets/img/facility1.jpg'
import facility2 from '.././assets/img/facility2.jpg'
import facility3 from '.././assets/img/facility3.jpg'
import './css/Room.css'
import BedIcon from '@mui/icons-material/Bed';
import { Roompriceboard } from '../components/Roompriceboard'

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { Containerfull } from '../components/Containerfull'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function Room() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Containerfull>
        <div style={{fontFamily:"Signika Negative", fontWeight:700}}>
            <img style={{width:"100%"}} src={titleword} alt="#"/>
            <div className="roominfo">
                <span>
                    若瑟桃米的每一間房各有特色 每開一扇門 都是一個驚喜
                </span>
                <span>
                    對外獨立窗讓房間涼爽而光線充足 每扇窗看出 都是一道風景
                </span>
            </div>
            <div className="pricetag">
                <span>
                    各式房型
                </span>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="roomphotos">
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 百日青 201</div>
                        <img src={room1} alt="room1"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 百日青 201</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room1} alt="room1"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 江某 201</div>
                        <img src={room2} alt="room2"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 江某 201</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room2} alt="room2"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 九層吹 203</div>
                        <img src={room3} alt="room3"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 九層吹 203</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room3} alt="room3"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 石賓 205</div>
                        <img src={room4} alt="room4"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 石賓 205</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room4} alt="room4"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 溪哥 205</div>
                        <img src={room5} alt="room5"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 溪哥 205</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room5} alt="room5"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 拉都希氏 301</div>
                        <img src={room6} alt="room6"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 拉都希氏 301</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room6} alt="room6"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 腹斑蛙 302</div>
                        <img src={room7} alt="room7"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 腹斑蛙 302</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room7} alt="room7"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 小雨蛙 303</div>
                        <img src={room8} alt="room8"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 小雨蛙 303</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room8} alt="room8"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 螢火蟲 305</div>
                        <img src={room9} alt="room9"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 螢火蟲 305</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room9} alt="room9"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                    <div className="roomphoto">
                        <div className='roomtitle'><BedIcon/> 五色鳥 306</div>
                        <img src={room10} alt="room10"/>
                        <Button onClick={handleOpen}><ZoomInIcon/> 放大</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='roomtitle'><BedIcon/> 五色鳥 306</div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <img src={room10} alt="room10"/>
                            </Typography>
                        </Box>
                        </Modal>
                    </div>
                </div>
            </div>

            <div className="price">
                <div className="pricetag">
                    房價表 Room Price
                </div>
                <div style={{display:"flex", justifyContent:"center", margin:"5px", fontSize:15, color:"red"}}>
                    每加一床500元
                </div>
                <div style={{display:"flex", justifyContent:"center", margin:"5px", fontSize:15, color:"red"}}>
                    ★平日：週日～週四　　★假日：週五、週六
                </div>
                <div style={{display:"flex", justifyContent:"center", margin:"5px", fontSize:15, color:"red"}}>
                    ★平日單間，續住另有優惠，請電洽。  
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Roompriceboard/>
                </div>
            </div>

            <div className="pricetag">
                房間設施 Room Facility
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="facility">
                    <div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15, color:"red"}}>
                            ‧ 乾濕分離衛浴　‧ 電視　‧ 無線網路(請自備電腦)
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15, color:"red"}}>
                            ‧ 冷氣空調　‧ 梳妝台　‧ 盥洗用具
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15, color:"red"}}>
                            ‧ 吹風機　‧ 數位電視  ‧ 通舖房會依人數鋪設軟床墊  
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"10px"}}>
                        <img src={facility1} alt="facility1"/>  
                        <img src={facility2} alt="facility2"/>  
                        <img src={facility3} alt="facility3"/>  
                    </div>
                </div>
            </div>

            <div className="pricetag">
                室內注意事項 Room Explain
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="facility">
                    <div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15}}>
                            ．請珍惜水電資源。
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15}}>
                            ．11點過後請輕聲細語
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15}}>
                            ．儘可能晚上11點前洗澡完畢，以免影響別人  
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15}}>
                            ．儘可能在主餐廳用餐，以免食物掉在室內，招來螞蟻蚊蟲 
                        </div>
                        <div style={{display:"flex", justifyContent:"start", margin:"5px", fontSize:15}}>
                            ．外出請關冷氣、電燈  
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricetag">
                住宿須知 Stay Explain
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="facility">
                    <div>
                        <div style={{display:"flex", justifyContent:"start", flexDirection:"column", margin:"5px", fontSize:15, lineHeight:"25px"}}>
                            <div>．住宿均含早餐。<span style={{color:"red"}}>(午、晚餐請在外用餐)</span></div>
                            <div>．早餐供應<b>AM 8:00~AM 9:00</b></div>
                            <div>．Check in 進房 : <b>PM 15:30 以後</b></div>
                            <div>．Check out 退房 : <b>AM 11:00 以前</b> </div>
                            <div>．為避免影響其他房客的住宿權益，請勿攜帶寵物。</div>
                            <div>．本民宿全面禁煙。</div>
                            <div>．本民宿距離紙教堂步行約5分。紙教堂可做為結婚禮堂、演奏、攝影、寫生、禮拜禱告、解說。</div>
                            <div>．本民宿另提供： 自行車20多輛、室內停車空間，晚間上鎖。</div>
                            <div>．入住時請先檢查房間是否乾淨，若有不乾淨請先跟我們反應，我們會立即處理！</div>
                            <div>．進入本民宿之巷道可通行3.5T之卡車，但對都會區來的貴賓可能感覺狹窄且彎曲。</div>
                            <div>．若你覺得進出本巷道有疑慮，請事先告知，我會引導至另一個較好出入的停車場</div>
                            <div>．否則若愛車擦傷，本民宿不負賠償之責。</div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="pricetag">
                訂房須知 Order Explain
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="facility">
                    <div>
                        <div style={{display:"flex", justifyContent:"start", flexDirection:"column", margin:"5px", fontSize:15, lineHeight:"25px"}}>
                            <div>1. 訂房請預付50％訂金。</div>
                            <div>2. 請於匯款後內來電確認，訂房專線：0939-909-362．並保留匯款單據 於住宿時示出匯款證明。</div>
                            <div>3. 當天電話訂房者，房間以予保留至當日下午四點。</div>
                            <div>4. 因故延期者，請於住宿前五日通知，訂金可保留三個月，否則視同放棄，延期以一次為限，並及早告知。</div>
                            <div>5. 如遇天災，南投縣宣布停止上課，訂金可全額退還或保留三個月。</div>
                            <div>6. 因個人因素無法前往，訂金不予退還。</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </Containerfull>
  )
}
