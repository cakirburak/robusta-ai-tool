import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Classification } from "./pages/Classification.js";
import { Annotation } from "./pages/Annotation.js";
import { ClassificationProject } from "./pages/ClassificationProject.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/classification" />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/annotation" element={<Annotation />} />
          <Route path="/classification/:projectId" element={<ClassificationProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
