import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/Footer"
import "./App.css"
import MainPage from "./pages/MainPage"
import About from "./pages/About"
import Reservation from "./pages/Reservation"
import Contact from "./pages/Contact"

function App() {
    

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/reservation" element={ <Reservation /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
