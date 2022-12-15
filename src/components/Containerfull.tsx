import '../assets/css/containerfull.css'
type Containerprops ={
    children: any;
}

export function Containerfull({children}:Containerprops){
    return(
        <div className={"Containerfull"}>
            {children}
        </div>
    )
}