import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import MainScreen from './pages/pannel/Main-Screen'
import MailScreen from './pages/pannel/Mail-Screen/Mail-Screen'
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />}>
        <Route path="/mail" element={<MailScreen />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
