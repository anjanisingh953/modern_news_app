import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Health from './components/pages/Health'
import Business from './components/pages/Business'
function App() {

  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/entertainment' element={<Home />}></Route>
          <Route exact path='/business' element={<Business />}></Route>
          <Route exact path='/general' element={<Home />}></Route>
          <Route exact path='/health' element={<Home />}></Route>
          <Route exact path='/science' element={<Home />}></Route>
          <Route exact path='/sports' element={<Home />}></Route>
            
          </Routes>
        </BrowserRouter>

      <Footer/>
      
    </>
  )
}

export default App
