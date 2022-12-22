import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BackCare from "./screens/BackCare";
import EyeCare from "./screens/EyeCare";
import EarCare from "./screens/EarCare";
import Exercise from "./screens/Exercise";
import TrainBackCare from "./screens/TrainBackCare";
import AboutUs from "./screens/Aboutus";
import HowtoUse from "./screens/HowtoUse";
import Plantime from "./screens/Plantime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/backcare" element={<BackCare />} />
        <Route path="/eyecare" element={<EyeCare />} />
        <Route path="/earcare" element={<EarCare />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/teachbackcare" element={<TrainBackCare />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtouse" element={<HowtoUse />} />
        <Route path="/plantime" element={<Plantime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
