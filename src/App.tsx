import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-allen_theme px-36 flex flex-col ">
        <Navbar />
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/Exams"} element={<div>Exams</div>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
