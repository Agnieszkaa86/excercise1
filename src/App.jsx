import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './index.css';

function App() {
  return (
    <div>
      <h1>Routing</h1>
      <hr />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
