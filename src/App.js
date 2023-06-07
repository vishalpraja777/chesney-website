import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Mainsection from './Components/Mainsection';
import Footer from './Components/Footer';
import ProductDetails from './Components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      {/* <Herosection/>
      <Mainsection/> */}
      
      <Routes>
        <Route path="/" element={<Herosection/>}></Route>
        {/* <Route path="/" element={<Mainsection/>}></Route> */}
        <Route path="/productdetails" element={<ProductDetails/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
