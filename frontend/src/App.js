import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
   <div>
    <Navbar/>

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
   </div>
  );
}

export default App;
