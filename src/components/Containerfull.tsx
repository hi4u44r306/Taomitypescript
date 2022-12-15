import '../assets/css/containerfull.css'

type Containerprops ={
    children: any;
}

export function Containerfull({children}:Containerprops){
    return(
        <div className={"Containerfull"}>
            {children}
            <div className='copyright'>
                <div>南投縣埔里鎮桃米生態村桃米巷59號(桃源國小旁)</div>
                <div>訂房專線：0939-909-362(郭偉儒)．顧客來電，將主動回電。</div>
                <div><a href="https://www.ncpb.gov.tw/sub/index.aspx?m1=23" target="_blank" rel="noreferrer">南投縣警察局埔里分局 049-2982429</a></div>
                <div>南投縣合法民宿394號</div>
                <div>Web Design By Victor</div>
            </div>
        </div>
    )
}