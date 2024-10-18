
import { Home } from '../src/Pages/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { MyProvider } from './Context/UserDataContext'
import { Player } from './Pages/Components/Player'

function App() {
  

  return (
    <>
    <MyProvider>
      {/* BrowseRouter activamos reactrouterdom en la app */}
      <BrowserRouter>
        {/* Activamos la funcionalidad para poder empezara  crear rutas en*/}
        <Routes>          
          <Route path='/player' element={<Player />} />
          <Route  path='/' element={<Home />} />{/*o puede ser index en lugar de path*/} 
        </Routes>
      
      </BrowserRouter>
    </MyProvider>
    

    </>
  )
}

export default App
