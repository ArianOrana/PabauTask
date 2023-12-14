import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services/:id" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
