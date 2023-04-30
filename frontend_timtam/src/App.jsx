import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Games from "./pages/Games";




function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/game" element={<Games />}/>
        <Route path="/note" element={<HomePage />}/>
        <Route path="/article" element={<Articles />}/>
        <Route path="/contact" element={<HomePage />}/>
        <Route path="/login" element={<HomePage />}/>
        <Route path="/register" element={<HomePage />}/>

      </Routes>
    </Router>
  )
}

export default App
