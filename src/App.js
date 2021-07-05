import {useState, useEffect} from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home'
import ImageHome from './component/ImageHome/ImageHome'
import About from './component/About/About'
import SlideImg from './component/SlideImg/SlideImg'
import Customers from './component/Customers/Customers'
import Service from './component/Service-/Service'
import Gallary from './component/Gallary/Gallary'
import Footer from './component/Footer/Footer'
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  /*create state for spinners*/
  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }, [])
  return (

    <div>
      {
        /*style spinner*/
        loading ? 
        <div className='spinners'>
          <CircleLoader
          size={100}
          color={'#FFC800'}
          loading={loading}
          />
        </div>
        :
        <div className='app'> 
          <Navbar/>
          <Home/>
          <ImageHome/>
          <SlideImg/>
          <About/>
          <Customers/>
          <Service/>
          <Gallary/>
          <Footer/>
        </div>
      }
    </div>
   
  );
}

export default App;
