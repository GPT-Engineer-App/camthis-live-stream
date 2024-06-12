import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Setup from "./pages/Setup.jsx";
import Charge from "./pages/Charge.jsx";
import AudioQuality from "./pages/AudioQuality.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/setup" element={<Setup />} />
        <Route exact path="/charge" element={<Charge />} />
        <Route exact path="/audio-quality" element={<AudioQuality />} />
      </Routes>
    </Router>
  );
}

export default App;