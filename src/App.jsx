import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import DetailPage from './components/pages/DetailPage'
import PageNotFound from './components/pages/PageNotFound'
function App() {

  return (
    <>
      <Header />
          <Routes>
          <Route exact name="home" path='/' element={<Home />}></Route>
          <Route exact name="home" path='/home' element={<Home />}></Route>
          <Route exact  path='/details/:pageCategoryName' element={<DetailPage />}></Route>
          <Route  path='/404' element={<PageNotFound />}></Route>             
          <Route  path='/*' element={<PageNotFound />}></Route>             
          </Routes>

      <Footer/>
      
    </>
  )
}

export default App
