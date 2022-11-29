import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home'
import Header from './Components/Header/Header';
import Admin from './Containers/Admin/Admin';
import Repairs from './Containers/Repairs/Repairs';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/repairs" element={<Repairs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
