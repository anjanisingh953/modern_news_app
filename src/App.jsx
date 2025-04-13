import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Business from './components/pages/Business'
import Health from './components/pages/Health'
import General from './components/pages/General'
import Science from './components/pages/Science'
import Sports from './components/pages/Sports'
import Technology from './components/pages/Technology'
import Entertainment from './components/pages/Entertainment'
function App() {

  return (
    <>
      <Header />
          <Routes>
          <Route exact name="home" path='/' element={<Home />}></Route>
          <Route exact name="home" path='/home' element={<Home />}></Route>
          <Route exact name="general" path='/general' element={<General />}></Route>
          <Route exact name="entertainment" path='/entertainment' element={<Entertainment/>}></Route>
          <Route exact name="health" path='/health' element={<Health />}></Route>
          <Route exact name="business" path='/business' element={<Business />}></Route>
          <Route exact name="sports" path='/sports' element={<Sports />}></Route>
          <Route exact name="technology" path='/technology' element={<Technology />}></Route>
            
          </Routes>

      <Footer/>
      
    </>
  )
}

export default App
