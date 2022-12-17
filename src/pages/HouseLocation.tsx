import { Containerfull } from "../components/Containerfull";
import titleword from '../assets/img/Location/titleword.jpg';
import map01 from '../assets/img/Location/map01.jpg';
import title01 from '../assets/img/Location/title01.jpg';
import title02 from '../assets/img/Location/title02.jpg';
import './css/Location.css'

export function HouseLocation(){
    return (
        <Containerfull>
            <div className="Location">
                <img style={{width:"100%"}} src={titleword} alt="#"/>
                <div className="locationcontainer">
                    <img src={map01} alt="map01"/>
                    <div className="locations">
                        <div className="location">
                            <img className="locationtitle" src={title01} alt="title01"/>
                            <span>國道三號→霧峰系統(214公里處，非霧峰交流道)→國道六號→埔里第一交流道(往魚池方向)→台14線→台21線→暨南大學→台21線51K處右轉→桃米生態村→桃源國小→抵達國小後直接電洽0939-909-362郭先生，我們將派專人帶您進來。</span>
                        </div>
                        <div  className="location">
                            <img className="locationtitle" src={title02} alt="title02"/>
                            <span>
                            高　　鐵　高鐵台中站→轉搭南投客運(國道六號直達車)進入埔里
                            台　　鐵　台鐵台中站→轉搭南投、台中客運或全航客運，國道六號直達車進入埔里
                            國光客運　台北西站→台中→埔里→日月潭(桃米坑下車)
                            南投客運　049-2996147、04-36018665
                            全航客運　049-2421820、04-22259631
                            抵達埔里後，需轉搭南投客運魚池線、豐榮客運日月潭線前往桃米生態村
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Containerfull>
    )
}