import "../assets/css/about.css"
import pic01 from '../../public/imgs/pic01.jpg'
import pic02 from '../../public/imgs/pic02.jpg'
import { Containerfull } from "../components/Containerfull";

export function About() {
    return (
        <Containerfull>
            <div className="abouttitle">
                <span style={{ fontSize: "25px" }}>關於若瑟桃米</span>
                <span style={{ fontSize: "15px" }}>Taomi Profile</span>
            </div>
            <div className="photocontainer">
                <div className="photo">
                    <img style={{ maxWidth: "100%", width: "25%", height: "auto" }} src={pic01} alt="01" />
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "15px", backgroundColor: "#FFFAF0", padding: "20px", borderRadius: "20px" }}>
                        <span>山林裡的 若瑟桃米民宿</span>
                        <span>有如童話中的 夢幻國度</span>
                        <span>滿山綠意 風動‧蟬鳴</span>
                        <span>塵囂中 獨留一方夢土 予您——</span>
                        <span>清晨　陽光穿透葉縫　灑落一地 燦爛溫煦</span>
                        <span>午后　風兒吹過輕紗　捎來一陣 欲醉微醺</span>
                        <span>深夜　月上林梢 薄霧升起　深林裡貓頭鷹的低鳴</span>
                        <span>伴著 戀人的喁喁私語 今夕何夕 共此情誼……</span>
                    </div>
                </div>
                <div className="photo">
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "15px", backgroundColor: "#FFFAF0", padding: "20px", borderRadius: "20px" }}>
                        <span>優雅潔淨的臥房</span>
                        <span>散發 溫馨舒適的氣息</span>
                        <span>帶給您無盡的驚喜</span>
                        <br />
                        <span>自然 輕暢 靜謐</span>
                        <span>若瑟桃米 歡迎您！</span>
                    </div>
                    <img style={{ maxWidth: "100%", width: "30%", height: "auto" }} src={pic02} alt="02" />
                </div>
            </div>
        </Containerfull>
    )
}