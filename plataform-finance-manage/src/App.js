import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login-page/login-page.js'
import Home from './pages/home-page/home-page.js'





// Páginas

const App = () => (
  <div> 
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Rotas Privadas */}
      </Routes>
    </Router>
   </div>
);

export default App;

