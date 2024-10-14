import './assets/CSS/App.css'
import {Session} from '../src/Pages/Session/Session'
import { Home } from '../src/Pages/Home/Home'

import { LoginFormComponent } from '../src/Pages/Components/LoginFormComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { MyProvider } from './Context/UserDataContext'

function App() {
  

  return (
    <>
    <MyProvider>
      {/* BrowseRouter activamos reactrouterdom en la app */}
      <BrowserRouter>
        {/* Activamos la funcionalidad para poder empezara  crear rutas en*/}
        <Routes>
          <Route path='/session' element={<Session />} />
          <Route  path='/' element={<Home />} />{/*o puede ser index en lugar de path*/} 
        </Routes>
      
      </BrowserRouter>
    </MyProvider>
    

    </>
  )
}

export default App
