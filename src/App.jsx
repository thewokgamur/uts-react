import './App.css'
import Home from './component/home'
import Toko from './component/toko'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />}/>
<Route exact path='/toko/:id' element={<Toko />}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
