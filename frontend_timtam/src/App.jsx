import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Games from "./pages/Games";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/game" element={<Games />}/>
        <Route path="/article" element={<Articles />}/>
        <Route path="/contact" element={<HomePage />}/>
        <Route path="/login" element={<HomePage />}/>
        <Route path="/register" element={<HomePage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </Router>
  )
}

export default App
