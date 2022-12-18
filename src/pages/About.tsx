import "./css/about.css"
import pic01 from '../assets/img/pic01.jpg';
import pic02 from '../assets/img/pic02.jpg';
import titleword from '../assets/img/titleword.jpg';
import mainbg from '../assets/img/mainbg.jpg';
import { Containerfull } from "../components/Containerfull";
import { SetStateAction, useState } from 'react';

export function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    return (
        <Containerfull>
            <div className="about">
                <div className="abouttitlewordcontainer">
                    <img src={titleword} alt="#" className="abouttitleword"/>
                </div>
                <div className="mainphotocontainer">
                    <div className="aboutphotocontainer">
                        <div className="aboutphoto">
                            <img className="aboutimg" src={pic01} alt="01" />
                            <div className="poemcontainer">
                                <span>山林裡的 若瑟桃米民宿</span>
                                <span>有如童話中的 夢幻國度</span>
                                <span>滿山綠意 風動‧蟬鳴</span>
                                <span>塵囂中 獨留一方夢土 予您——</span>
                                <div className="poem">
                                    <span>清晨</span>
                                    <span>陽光穿透葉縫　灑落一地 燦爛溫煦</span>
                                </div>
                                <div className="poem">
                                    <span>午后</span>
                                    <span>風兒吹過輕紗　捎來一陣 欲醉微醺</span>
                                </div>
                                <div className="poem">
                                    <span>深夜</span>
                                    <span>月上林梢 薄霧升起　深林裡貓頭鷹的低鳴</span>
                                </div>
                                <div className="poemoneline">
                                    <span> </span>
                                    <span>伴著 戀人的喁喁私語 今夕何夕 共此情誼.....</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottomphoto">
                            <div className="poemcontainer">
                                <div className="poem">
                                    <span> </span>
                                    <span>優雅潔淨的臥房</span>
                                </div>
                                <div className="poem">
                                    <span> </span>
                                    <span>散發 溫馨舒適的氣息</span>
                                </div>
                                <div className="poem">
                                    <span> </span>
                                    <span>自然 輕暢 靜謐</span>
                                </div>
                                <div className="poem">
                                    <span> </span>
                                    <span>歐式的浪漫 日式的禪意</span>
                                </div>
                                <div className="poem">
                                    <span> </span>
                                    <span>帶給您無盡的驚喜</span>
                                </div>
                                <div className="poem">
                                    <span> </span>
                                    <span><b>若瑟桃米</b> 歡迎您！</span>
                                </div>
                            </div>
                            <img className="aboutimg" src={pic02} alt="02" />

                        </div>
                    </div>
                </div>
            </div>
        </Containerfull>
    )
}