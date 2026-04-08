// //src/App.jsx
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useState } from "react";
import Zoo from "./pages/Zoo";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";
import ControlsPopup from "./components/ControlsPopup";

function AppShell() {
  const location = useLocation();
  const [showControls, setShowControls] = useState(true);
  const isAnimalDetailsPage = location.pathname.startsWith("/animal/");

  return (
    <>
      {!isAnimalDetailsPage && showControls && (
        <ControlsPopup onClose={() => setShowControls(false)} />
      )}
      <Zoo controlsEnabled={!isAnimalDetailsPage} />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/animal/:id" element={<AnimalDetailsPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
