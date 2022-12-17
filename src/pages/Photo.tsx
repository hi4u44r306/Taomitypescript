import { Containerfull } from "../components/Containerfull";
import photo01 from '../assets/img/photopage/01.jpg';
import photo02 from '../assets/img/photopage/02.jpg';
import photo03 from '../assets/img/photopage/03.jpg';
import photo04 from '../assets/img/photopage/04.jpg';
import photo05 from '../assets/img/photopage/05.jpg';
import photo06 from '../assets/img/photopage/06.jpg';
import photo07 from '../assets/img/photopage/07.jpg';
import photo08 from '../assets/img/photopage/08.jpg';
import photo09 from '../assets/img/photopage/09.jpg';
import photo10 from '../assets/img/photopage/10.jpg';
import photo11 from '../assets/img/photopage/11.jpg';
import photo12 from '../assets/img/photopage/12.jpg';
import tape from '../assets/img/photopage/box-c.gif';
import './css/Photo.css';
import { PhotoBig } from "../components/PhotoBig";
import { useState } from "react";
import { PhotoBigHorizontal } from "../components/PhotoBigHorizontal";
import titleword from '../assets/img/photopage/titleword.jpg'

export function Photo(){
    const photodb=[
        {
            img:photo01
        },
        {
            img:photo02
        },
        {
            img:photo03
        },
        {
            img:photo04
        },
        {
            img:photo05
        },
        {
            img:photo06
        },
        {
            img:photo07
        },
        {
            img:photo08
        },
        {
            img:photo09
        },
        {
            img:photo10
        },
    ]
    return (
        <Containerfull>
            <div className="PhotoMain">
                <img src={titleword} alt="#"/>
                <div className="photos">
                    {
                        photodb.map(photo => {
                            return (
                                <div className='photo' key={photo.img}>
                                    <div className="tapecontainer">
                                        <img className="tape" src={tape} alt="#"/>
                                    </div>
                                    <div className="photoimgcontainer">
                                        <img className="photoimg" src={photo.img} alt={"#"}/>
                                    </div>
                                    <PhotoBig img={photo.img}/>
                                </div>
                            )
                        })
                    }
                    <div className="photo">
                        <div className="tapecontainer">
                            <img className="tape" src={tape} alt="#"/>
                        </div>
                        <div className='photoimgcontainer'>
                            <img className="photoimghorizontal" src={photo11} alt="#"/>
                        </div>
                        <PhotoBigHorizontal img={photo11}/>
                    </div>
                    <div className="photo">
                        <div className="tapecontainer">
                            <img className="tape" src={tape} alt="#"/>
                        </div>
                        <div className='photoimgcontainer'>
                            <img className="photoimghorizontal" src={photo12} alt="#"/>
                        </div>
                        <PhotoBigHorizontal img={photo12}/>
                    </div>
                </div>
            </div>
        </Containerfull>
    )
}