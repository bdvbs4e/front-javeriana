import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Building from "./pages/Building";
import Classroom from "./pages/Classroom";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Edificio Guayacanes</h1>
          <div className="my-4">
            <ImageGallery />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edificio/:id" element={<Building />} />
            <Route path="/edificio/:id/salon/:salonId" element={<Classroom />} />
            <Route path="/salon/:salonId" element={<Classroom />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 