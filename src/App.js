import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Classification } from "./pages/Classification.js";
import { Annotation } from "./pages/Annotation.js";
import { ClassificationProjectHome } from "./pages/ClassificationProjectHome.js";
import { ClassificationProjectClassify } from "./pages/ClassificationProjectClassify.js";
import { ClassificationProjectClass } from "./pages/ClassificationProjectClass.js";
import { ClassificationProjectDataFiles } from "./pages/ClassificationProjectDataFiles.js";
import { ClassificationProjectDataSets } from "./pages/ClassificationProjectDataSets.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/classification" />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/annotation" element={<Annotation />} />
          <Route path="/classification/:projectId" element={<ClassificationProjectHome />} />
          <Route path="/classification/:projectId/classify" element={<ClassificationProjectClassify />} />
          <Route path="/classification/:projectId/classes" element={<ClassificationProjectClass />} />
          <Route path="/classification/:projectId/data-files" element={<ClassificationProjectDataFiles />} />
          <Route path="/classification/:projectId/data-sets" element={<ClassificationProjectDataSets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
