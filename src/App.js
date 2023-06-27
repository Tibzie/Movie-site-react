import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;
