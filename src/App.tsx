
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './features/Auth/Cadastro'
import './index.css'
import Login from './features/Auth/login'
import { HOME } from './features/home/Homes'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
   
   <Route path="/" element={<HOME/>} />
      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
     
      
    </>
  )
}

export default App
