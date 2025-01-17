import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutOne />} />
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
