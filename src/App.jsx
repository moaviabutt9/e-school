import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Courses from "./Components/Courses";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div>
    <Header />
    <Hero />
    <Stats />
    <Courses />
    <Testimonial />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/others" element={<h1>Others Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
