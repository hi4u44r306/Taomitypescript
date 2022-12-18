import '../assets/css/containerfull.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'

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
                        <Nav.Link className='navlink' to="/" href="/" as={NavLink}>
                            <div style={{display:"flex", alignItems:"center"}}>
                             關於若瑟桃米
                            </div>
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/room" href="/room" as={NavLink}>
                            <div style={{display:"flex", alignItems:"center"}}>
                             若瑟寢宮
                            </div>
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/photo" href="/photo" as={NavLink}>
                            <div style={{display:"flex", alignItems:"center"}}>
                             翠綠庭園
                            </div>
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/travel" href="/travel" as={NavLink}>
                            <div style={{display:"flex", alignItems:"center"}}>
                             周邊景點
                            </div>
                        </Nav.Link>
                        <Nav.Link className='navlink' to="/location" href="/location" as={NavLink}>
                            <div style={{display:"flex", alignItems:"center"}}>
                             交通導覽
                            </div>
                        </Nav.Link>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='copyrightsection'>
                        <div className='sectiontitle'><InfoIcon/> Information</div>
                        <div><a href="https://www.ncpb.gov.tw/sub/index.aspx?m1=23" target="_blank" rel="noreferrer" className='policelink'>南投縣警察局埔里分局 049-2982429</a></div>
                        <div>南投縣合法民宿394號</div>
                    </div>
                    <div>Web Design By Victor</div>
                </div>
            </div>
            <div className='bottom'>
                <span> 南投埔里．若瑟桃米民宿</span>
                <span> Tao-Mi Country 版權所有 2022 © Copyright Reserved.</span>
            </div>
        </div>
    )
}