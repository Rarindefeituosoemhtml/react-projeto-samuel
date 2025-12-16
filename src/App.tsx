import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from './Pages/Produtos/Produtos'
import Home from './Pages/Home/Home'






function App() {


  return (
    <>
     <BrowserRouter> 
     <Routes>
    <Route path="/produtos" element={ <Produtos />} />
    <Route path="/" element={ <Home />} />
    


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
