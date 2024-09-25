import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login-page/login-page.js'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;
