import roomtitleword from '.././assets/img/roomtitleword.jpg'
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
import { Containerfull } from '../components/Containerfull'
import { Roomdetail } from '../components/Roomdetail'
import title01 from '../assets/img/Room/title01.jpg';
import title02 from '../assets/img/Room/title02.jpg';
import title03 from '../assets/img/Room/title05.gif';
import title04 from '../assets/img/Room/title03.jpg';
import title05 from '../assets/img/Room/title04.jpg';
import picleft from './css/picleft.jpg';    

export function Room() {
    const roomdb = [
        {
            name: '百日青 201',
            image: room1,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房',
        },
        {
            name: '江某 202',
            image: room2,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房',
        },
        {
            name: '九層吹 203',
            image: room3,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房，可加 2~3 床',
        },
        {
            name: '石賓 205',
            image: room4,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房，可加 1~2 床',
        },
        {
            name: '溪哥 206',
            image: room5,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '2床，可加1床',
        },
        {
            name: '拉都希氏 301',
            image: room6,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房',
        },
        {
            name: '腹斑蛙 302',
            image: room7,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房',
        },
        {
            name: '小雨蛙 303',
            image: room8,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房，可加 2~3 床',
        },
        {
            name: '螢火蟲 305',
            image: room9,
            noramlprice: '2,800',
            holidayprice: '3,200',
            describe: '四人房',
        },
        {
            name: '五色鳥 306',
            image: room10,
            noramlprice: '2,000',
            holidayprice: '2,400',
            describe: '雙人房，可加 1~2 床',
        },  
    ]
  return (
    <Containerfull>
        <div className="Roomcontainer">
            <div className='roomtitlewordcontainer'>
                <img className='roomtitleword' src={roomtitleword} alt="#"/>
            </div>
            <div className='roommainbody'>
                <div className="roominfo">
                    <span>
                        若瑟桃米的每一間房各有特色 每開一扇門 都是一個驚喜
                    </span>
                    <span>
                        對外獨立窗讓房間涼爽而光線充足 每扇窗看出 都是一道風景
                    </span>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='roomphotos'>
                    {
                        roomdb.map(room => {
                            return (
                                <div className='roomphoto' key={room.name}>
                                    <div className='roomtitle'> {room.name}</div>
                                    <img src={room.image} alt={"#"}/>
                                    <Roomdetail img={room.image}/>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="price">
                        <div className="pricetag">
                            <img className='pricetitle' src={title01} alt="title01"/>
                        </div>
                    <div className='priceboardwithbankaccount'>
                        <div>
                            <div className='bankdetail'>
                                <span>局號 : 0121099</span>
                                <span>帳號 : 0858601</span>
                                <span>劃撥郵局 : 蘆竹郵局</span>
                                <span>(ATM轉帳代號 : 700)</span>
                                <span>戶名 : 郭偉儒</span>
                            </div>
                            <img className='picleft' src={picleft} alt="picleft"/>
                        </div>
                        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center",margin:"5px", fontSize:15, color:"red"}}>
                            每加一床500元
                            </div>
                            <div style={{display:"flex", justifyContent:"center", margin:"5px", fontSize:15, color:"red"}}>
                                ★平日：週日～週四　★假日：週五、週六
                            </div>
                            <Roompriceboard/>
                            <div style={{display:"flex", justifyContent:"center", margin:"5px", fontSize:15, color:"red"}}>
                                ★平日單間，續住另有優惠，請電洽。  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricetag">
                    <img className='pricetitle' src={title02} alt="title02"/>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="facility">
                        <div>
                            <div className='facilityspanred'>
                                乾濕分離衛浴　‧ 電視　‧ 無線網路(請自備電腦)
                            </div>
                            <div className='facilityspanred'>
                                冷氣空調　‧ 梳妝台　‧ 盥洗用具
                            </div>
                            <div className='facilityspanred'>
                                吹風機　‧ 數位電視  ‧ 通舖房會依人數鋪設軟床墊  
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
                    <img className='pricetitle' src={title03} alt="title03"/>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="facility">
                        <div>
                            <div className='facilityspan'>
                                請珍惜水電資源。
                            </div>
                            <div className='facilityspan'>
                                11點過後請輕聲細語
                            </div>
                            <div className='facilityspan'>
                                儘可能晚上11點前洗澡完畢，以免影響別人  
                            </div>
                            <div className='facilityspan'>
                                儘可能在主餐廳用餐，以免食物掉在室內，招來螞蟻蚊蟲 
                            </div>
                            <div className='facilityspan'>
                                外出請關冷氣、電燈  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricetag">
                    <img className='pricetitle' src={title04} alt="title04"/>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="facility">
                        <div>
                            <div style={{display:"flex", justifyContent:"start", flexDirection:"column", margin:"5px", fontSize:15, lineHeight:"25px"}}>
                                <span className='facilityspan'>住宿均含早餐。<span style={{color:"red"}}>(午、晚餐請在外用餐)</span></span>
                                <span className='facilityspan'>早餐供應<b>AM 8:00~AM 9:00</b></span>
                                <span className='facilityspan'>Check in 進房 : <b>PM 15:30 以後</b></span>
                                <span className='facilityspan'>Check out 退房 : <b>AM 11:00 以前</b> </span>
                                <span className='facilityspan'>為避免影響其他房客的住宿權益，請勿攜帶寵物。</span>
                                <span className='facilityspan'>本民宿全面禁煙。</span>
                                <span className='facilityspan'>本民宿距離紙教堂步行約5分。紙教堂可做為結婚禮堂、演奏、攝影、寫生、禮拜禱告、解說。</span>
                                <span className='facilityspan'>本民宿另提供： 自行車20多輛、室內停車空間，晚間上鎖。</span>
                                <span className='facilityspan'>入住時請先檢查房間是否乾淨，若有不乾淨請先跟我們反應，我們會立即處理！</span>
                                <span className='facilityspan'>進入本民宿之巷道可通行3.5T之卡車，但對都會區來的貴賓可能感覺狹窄且彎曲。</span>
                                <span className='facilityspan'>若你覺得進出本巷道有疑慮，請事先告知，我會引導至另一個較好出入的停車場</span>
                                <span className='facilityspan'>否則若愛車擦傷，本民宿不負賠償之責。</span>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pricetag">
                    <img className='pricetitle' src={title05} alt="title05"/>
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
        </div>
    </Containerfull>
  )
}








