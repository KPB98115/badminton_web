import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import ReservationBlock from "./components/ReservationBlock";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <ReservationBlock />
            <Routes className="route_container">
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
