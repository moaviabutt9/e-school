import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Courses from "./Components/Courses";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

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
      </Routes>
    </Router>
  );
};

export default App;
