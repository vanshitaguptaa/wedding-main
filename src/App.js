import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";import Navbar from './component/Navbar/Navbar';
import Blog from  './component/Blog/Blog'
import Home from './component/Home/Home';
import Rootlayout from './component/Rootlayout';
import Contactus from './component/Contactus/Contactus';
import BackgroundImageInterval from './component/landing-page/comp/BackgroundImageInterval';
import Gallery from './utils/gallery/Gallery';
import About from './component/About/About';
import Login from './component/Login/LoginPage'
import Service from './component/Services/Service';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<BackgroundImageInterval/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About/>} />
          
          <Route exact path="/contact" element={<Contactus />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/Login" element={<Login />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
