
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'
import Home from './pages/Home'
import Login from './pages/Login'



function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
