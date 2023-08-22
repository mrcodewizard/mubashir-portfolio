import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/navbar/Navbar';
import MainRoutes from './routes/Routes';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <MainRoutes />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
