import { Routes, Route} from 'react-router-dom';
import { About } from './pages/About';
import './app.css';
import { Room } from './pages/Room';
import { Photo } from './pages/Photo';
import { Travel } from './pages/Travel';
import { HouseLocation } from './pages/HouseLocation';
import { NavigationMobile } from './components/NavigationMobile';
import { Home } from './pages/Home';

function App() {
  return( 
    <>
      <div className='navigationmobile'>
        <NavigationMobile/>
      </div>
      <div className='mainbody'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/room" element={<Room/>}/>
          <Route path="/photo" element={<Photo/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/location" element={<HouseLocation/>}/>
        </Routes>  
      </div>
    </>
  )
}

export default App
