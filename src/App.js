import './App.css';
import Navbar from './components/pages/Navbar';
import Main from './components/pages/Main';
//import NavbarB from './components/pages/NavbarB'
import { BrowserRouter as Router } from "react-router-dom";
import Tools from './components/pages/Tools';
import Pricing from './components/pages/Pricing';
import Footer from './components/pages/Footer';

function App() {
  return (
    <>
    <div className="main-container">
      <Router>
        <Navbar />
        <Main />
        <Tools />
        <Pricing />
      </Router>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
