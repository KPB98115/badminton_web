import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReservationBlock from "./components/ReservationBlock";
import Badminton from "./pages/Badminton";
import Instructor from "./pages/Instructor";
import Course from "./pages/Course";
import "./App.css";
import ClassInfo from "./pages/ClassInfo";
import Benefit from "./pages/Benefit";
import Privacy_term from "./pages/Private_terms";

function App() {
  return (
    <Router>
      <Header />
      <ReservationBlock />
      <Routes>
        <Route path="/badminton_web" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/badminton_info" element={<Badminton />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/classinfo" element={<ClassInfo />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy_terms" element={<Privacy_term />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
