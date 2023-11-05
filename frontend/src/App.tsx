
import Home from "./components/Home"
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Header/navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
