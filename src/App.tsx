import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navigation } from './components/Navigation';
import './assets/css/app.css'
import { Room } from './pages/Room';
import { Photo } from './pages/Photo';
import { Travel } from './pages/Travel';
import { HouseLocation } from './pages/HouseLocation';
import { NavigationMobile } from './components/NavigationMobile';

function App() {
  return( 
    <>
      <NavigationMobile/>
      <div style={{backgroundColor:"#DCDCDC"}}>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/room" element={<Room/>}/>
          <Route path="/photo" element={<Photo/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/location" element={<HouseLocation/>}/>
        </Routes>  
        <div className='copyright'>
          <span className='copyrightspan'>
            南投埔里．若瑟桃米民宿　Tao-Mi Country 版權所有 2022© Copyright Reserved.
          </span>
          <span className='copyrightspan'>
            南投縣埔里鎮桃米生態村桃米巷59號(桃源國小旁)
          </span>
          <span className='copyrightspan'>
            主要訂房專線：0939-909-362(郭偉儒)．顧客來電，將主動回電。
            南投縣警察局埔里分局 049-2982429 南投縣合法民宿394號
          </span>
          <span className='design'>
            Web Design By Victor
          </span>
        </div>
      </div>
    </>
  )
}

export default App
