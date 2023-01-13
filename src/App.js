import "./App.css";
import "animate.css/animate.min.css";
import TypeAnimation from "./componets/TypeAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import ComingSoon from "./componets/Coming_soon";
import Productathon from "./componets/Productathon/Productathon";
import Gameathon from "./componets/Gameathon/Gameathon";
import Ideathon from "./componets/Ideathon/Ideathon";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coming_soon" element={<ComingSoon />} />
          <Route exact path="/productathon" element={<Productathon />} />
          <Route exact path="/gameathon" element={<Gameathon />} />
          <Route exact path="/ideathon" element={<Ideathon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
