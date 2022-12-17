import { Containerfull } from "../components/Containerfull";
import titleword from '../assets/img/Travel/titleword.jpg';
import './css/Travel.css';
import pic01 from '../assets/img/Travel/pic01.jpg';
import title01 from '../assets/img/Travel/title01.jpg';
import pic02 from '../assets/img/Travel/pic02.jpg';
import title02 from '../assets/img/Travel/title02.jpg';
import pic03 from '../assets/img/Travel/pic03.jpg';
import title03 from '../assets/img/Travel/title03.jpg';
import pic04 from '../assets/img/Travel/pic04.jpg';
import title04 from '../assets/img/Travel/title04.jpg';
import pic05 from '../assets/img/Travel/pic05.jpg';
import title05 from '../assets/img/Travel/title05.jpg';
import pic06 from '../assets/img/Travel/pic06.jpg';
import title06 from '../assets/img/Travel/title06.jpg';
import pic07 from '../assets/img/Travel/pic07.jpg';
import title07 from '../assets/img/Travel/title07.jpg';
import pic08 from '../assets/img/Travel/pic08.jpg';
import title08 from '../assets/img/Travel/title08.jpg';
import pic09 from '../assets/img/Travel/pic09.jpg';
import title09 from '../assets/img/Travel/title09.jpg';
import pic10 from '../assets/img/Travel/pic10.jpg';
import title10 from '../assets/img/Travel/title10.jpg';
import pic11 from '../assets/img/Travel/pic11.jpg';
import title11 from '../assets/img/Travel/title11.jpg';
import title12 from '../assets/img/Travel/title12.jpg';
import title13 from '../assets/img/Travel/title13.jpg';
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

export function Travel(){
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);
    return (
        <Containerfull>
            <div className="TravelMain">
            {
                !loaded ?
                (
                    <GridLoader
                    color="#fac561"
                    size={15}
                    />
                )
                :
                (
                    <div>

                        <div>
                            <img className="TravelTitleWord" src={titleword} alt="titleword"/>
                        </div>
                        {/* 1 暨南大學 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic01}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title01}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                        暨南大學所在地原是台糖桃米坑農場，是佔地廣大的台地，遠眺景色優美，
                                        本身校園也十分富有綠意。
                                        寬闊的綠色大草原，林蔭下放置野餐桌，是遊客們最喜愛的好去處 。
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 2 茅埔坑生態公園 */}
                        <div className="travelsection">
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title02}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                        桃米最大的青蛙，就是在茅埔坑的貢德氏赤蛙！茅埔坑公園的濕地及生態池，是桃米自主營造小組第一個以生態工法施作的河道。充滿綠意的園內，點綴著到處巡弋飛翔的蜻蜓，巨形的竹編蜻蜓和青蛙，更是吸引眾人的目光。
                                        <b style={{color:"red"}}>賞蛙請自備手電筒</b>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img className="travelimage" src={pic02}/>
                            </div>
                        </div>

                        {/* 3 水上瀑布 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic03}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title03}/>
                                </div>
                                <div className="travelspan">
                                    <span> 
                                        水上瀑布屬桃米溪中游，夏季溪谷邊總是開滿野薑花，是當地人的私房景點，上、下兩層瀑布加起來有3、4層樓高，水勢壯闊浩大，經年累月將山谷沖出一個水深2、3公尺的深淵，站在離水面有1公尺高的大石頭上跳水，是山上孩子互探膽量的挑戰地點。
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 4 親水公園 */}
                        <div className="travelsection">
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title04}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                        假日總是吸引民眾前來汲取的桃米山泉，泉水持續流過桃米親水公園，極富創意的戲水設施，比制式的游泳池多一點童心，比水上樂園更開放、更接近山林。由東海大學建研所的學生以竹、木建材築起古意樸拙的更衣淋浴間，與公園旁的台灣原生種樹林，讓親水公園更添趣味。
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img className="travelimage" src={pic04}/>
                            </div>
                        </div>

                        {/* 5 草湳濕地 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic05}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title05}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                        曾經遍植荷花，有「大學荷花池」之稱的草湳濕地，是桃米最大的濕地，動植物生態也特別的豐富。區內的蜻蜓流籠、青蛙簡報室、嚇一跳橋等休憩設施，是遊客的最愛。
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 6 日月潭拉魯島 */}
                        <div className="travelsection">
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title06}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                    拉魯島是邵族的祖靈聖地，亦曾是邵族的舊聚落。島上種植代表邵族最高祖靈---茄苳樹，並以浮台營造舊日島嶼意象，增設棧道看台，以此展現此處歷史文化、生態及觀光的內涵。
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img className="travelimage" src={pic06}/>
                            </div>
                        </div>

                        {/* 7 日月潭文武廟 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic07}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title07}/>
                                </div>
                                <div className="travelspan">
                                    <span>
                                    文武廟以祭拜孔子、關公而聞名，廟宇以巍峨聳立、氣勢非凡，因依山勢而建，故為坐南朝北，亦是其特色。另外以石階365級最為稱道，有人戲稱須走過「一年」，又名「年梯」，才能抵達文武廟，許多遊客遊賞日月潭，必來此登年梯祈福。到此找尋屬於你自己生日的那一階梯，是許多遊客們的樂趣。
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 8 日月潭九族文化村 */}
                        <div className="travelsection">
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title08}/>
                                </div>
                                <div className="travelspan">
                                    <span>九族文化村是以原住民文化為主題之遊樂園區，園區內可藉由表演以及原住民住屋等了解原住民文化，亦有許多遊樂設施、纜車以及相關活動。</span>
                                </div>
                            </div>
                            <div>
                                <img className="travelimage" src={pic08}/>
                            </div>
                        </div>

                        {/* 9 頭社盆地 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic09}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title09}/>
                                </div>
                                <div className="travelspan">
                                    <span>頭社盆地及日月潭以一山之隔，原處為一水潭，後因泥沙淤積而形成沼澤，先民 為改善不易耕種的地質，搬土填池，形成上層為土、下層為沼澤的獨特地形；盆 地內種植農作以絲瓜為大宗，清脆甘甜，該區亦為全國第一的老菜脯生產區。</span>
                                </div>
                            </div>
                        </div>

                        {/* 10 三育高中 */}
                        <div className="travelsection">
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title10}/>
                                </div>
                                <div className="travelspan">
                                    <span>於1951年創校，設有中學及大專院校體系，迷人的紅磚建築和一望無際的草地， 四周枝葉扶疏、隨四季更迭變換景緻，充滿異國風情，吸引眾多遊客前來散步、 取景。</span>
                                </div>
                            </div>
                            <div>
                                <img className="travelimage" src={pic10}/>
                            </div>
                        </div>

                        {/* 11 日月潭纜車 */}
                        <div className="travelsection">
                            <div>
                                <img className="travelimage" src={pic11}/>
                            </div>
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title11}/>
                                </div>
                                <div className="travelspan">
                                    <span>萬眾期待的日月潭纜車於2010年元月正式啟動，採單線自動循環式纜車系統，分 為日月潭及九族文化村兩端起迄點，遊客能以水、陸、空三種觀點來品嚐日月潭之美。</span>
                                </div>
                            </div>
                        </div>
                        {/* 12 明潭傳奇風物館 */}
                        <div className="travelsection">
                            {/* <div>
                                <img className="travelimage" src={title12}/>
                            </div> */}
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title12}/>
                                </div>
                                <div className="travelspan">
                                    <span>來到位於日月潭水社壩附近的明潭風物館，一定要品嚐館主一手栽種、自產自銷 的台灣咖啡，風物館周邊尚保有日月潭的原始自然環境，沒有現代式的建築，而是 保有鄉野山居的簡單自然。</span>
                                </div>
                            </div>
                        </div>
                        {/* 13 向山行政暨遊客中心 */}
                        <div className="travelsection">
                            {/* <div>
                                <img className="travelimage" src={title13}/>
                            </div> */}
                            <div className="traveldetail">
                                <div>
                                    <img className="traveltitle" src={title13}/>
                                </div>
                                <div className="travelspan">
                                    <span>設計感十足的向山行政暨遊客中心，位於日月潭涵碧半島的對岸，中心內的向山 咖啡館更能以絕佳的視野欣賞日月潭，是個自開幕後即受到遊客歡迎的休憩處。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </Containerfull>
    )
}