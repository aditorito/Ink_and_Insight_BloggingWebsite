import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Auth } from './pages/Signup'
import { Blog } from './pages/Blog'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Auth type={'signup'}/>}/>
            <Route path='/signin'  element={<Auth type={'signin'}/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
