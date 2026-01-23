// //src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Zoo from "./pages/Zoo";
import AnimalDetailsPage from "./pages/AnimalDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Zoo />} />
        <Route path="/animal/:id" element={<AnimalDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
