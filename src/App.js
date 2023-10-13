import { Route, Routes} from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Home from './components/Home'
import PartsProvider from './components/Context';
import NavBar from './components/NavBar';


function App() {
 
  return (
    <>
    
    
    <PartsProvider>
    <NavBar/>
    <div className='main'>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      </Routes>
      </div>
    </PartsProvider>
   
    </>
  )

}

export default App;
