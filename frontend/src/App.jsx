import './App.css'
import Login from '../src/pages/login/Login'
import Signup from '../src/pages/singup/Signup'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <main className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
