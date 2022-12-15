import '../assets/css/containerfull.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

type Containerprops ={
    children: any;
}

export function Containerfull({children}:Containerprops){
    return(
        <div className={"Containerfull"}>
            {children}
            <div className='copyright'>
                <div className='left'>
                    <div className='copyrightsection'>
                        <div className='sectiontitle'><LocationOnIcon/> Location</div>
                        <div>地址 : 南投縣埔里鎮桃米生態村桃米巷59號(桃源國小旁)</div>
                    </div>
                    <div className='copyrightsection'>
                        <div className='sectiontitle'><CallIcon/> Contact</div>
                        <div>訂房專線 : 0939-909-362(郭偉儒)．顧客來電，將主動回電。</div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='copyrightsection'>
                        <div className='sectiontitle'><InsertLinkIcon/> Link</div>
                        <div className='linkcontainer'>
                            <a href='/'>關於若瑟桃米</a>
                            <a href='/room'>若瑟寢宮</a>
                            <a href='/photo'>翠綠庭園</a>
                            <a href='/travel'>周邊景點</a>
                            <a href='/location'>交通導覽</a>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='copyrightsection'>
                        <div className='sectiontitle'><InfoIcon/> Information</div>
                        <div><a href="https://www.ncpb.gov.tw/sub/index.aspx?m1=23" target="_blank" rel="noreferrer">南投縣警察局埔里分局 049-2982429</a></div>
                        <div>南投縣合法民宿394號</div>
                    </div>
                    <div>Web Design By Victor</div>
                </div>
            </div>
            <div className='bottom'>南投埔里．若瑟桃米民宿　Tao-Mi Country 版權所有 2022 © Copyright Reserved.</div>
        </div>
    )
}