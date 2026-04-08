// //src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Zoo from "./pages/Zoo";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";
import ControlsPopup from "./components/ControlsPopup";
export default function App() {
  const [showControls, setShowControls] = useState(true);
  return (
    <BrowserRouter>
      {showControls && (
        <ControlsPopup onClose={() => setShowControls(false)} />
      )}
      <Routes>
        <Route path="/" element={<Zoo />} />
        <Route path="/animal/:id" element={<AnimalDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}