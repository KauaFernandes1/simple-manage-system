import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login-page/login-page.js'
import Home from './pages/home-page/home-page.js'
import HomeNavbar from './components/home-page/navbar/navbar.js'




// Páginas

const App = () => (
  <div> 
    <Router>
    <div>
        <HomeNavbar /> {/* Menu lateral fixo */}
        <div style={{ marginLeft: '250px', padding: '20px' }}>
          {/* Definição das rotas */}
          <Routes>
            <Route path="/overview" element={<Home />} />
            {/* <Route path="/statistics" element={<Profile />} />
            <Route path="/customers" element={<Profile />} />
            <Route path="/product" element={<Profile />} />
            <Route path="/messages" element={<Profile />} />
            <Route path="/transactions" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/security" element={<Security />} /> */}
          </Routes>
        </div>
      </div>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Rotas Privadas */}
      </Routes>
    </Router>
   </div>
);

export default App;

