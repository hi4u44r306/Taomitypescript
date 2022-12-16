
import { Containerfull } from '../components/Containerfull';
import homebg from '../assets/img/homebg.jpg';
import './css/Home.css';

export function Home(){
    return (
        <Containerfull>
            <div className='homebgcontainer'>
                <img className='homebg' src={homebg} alt="#"/>
            </div>
        </Containerfull>
    )
}