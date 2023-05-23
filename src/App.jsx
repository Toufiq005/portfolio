import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import ContactPage from './Pages/ContactPage'

function App() {

  return (
    < >
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App
