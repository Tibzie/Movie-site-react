import { Route, Routes } from "react-router-dom";
import './assets/css/app.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';


const App = () => {
  return (
    <>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>

  );
}

export default App;
