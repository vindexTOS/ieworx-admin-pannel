import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import MainScreen from './pages/pannel/Main-Screen'
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
