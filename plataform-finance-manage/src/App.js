import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login-page/login-page.js'
import HomePage from './pages/home-page/home-page.js'




// Componentes de layout
const PublicLayout = ({ children }) => (
  <div style={{ padding: "20px" }}>
    {children}
  </div>
);

const PrivateLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <aside style={{ width: "200px", background: "#333", color: "#fff" }}>Menu</aside>
    <div style={{ marginLeft: "200px", padding: "20px" }}>
      <header style={{ background: "#ddd", padding: "10px" }}>Cabeçalho</header>
      {children}
    </div>
  </div>
);

// Páginas

const App = () => (
  <Router>
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/Login" element={<PublicLayout><Login /></PublicLayout>} />

      {/* Rotas Privadas */}
      <Route path="/home" element={<PrivateLayout><HomePage /></PrivateLayout>} />
    </Routes>
  </Router>
);

export default App;

