import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Stats from './Pages/Stats';
import Vaccine from './Pages/Vaccine';
import Login from './Pages/Login';
import Footerr from './Components/Footerr';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vaccine' element={<Vaccine/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footerr/>
    </div>
  );
}

export default App;
