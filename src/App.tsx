import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="min-h-screen bg-allen_theme px-36 flex flex-col ">
        <Navbar />
        <Home/>
        <BrowserRouter>
          <Routes>
            <Route path={"/Exams"} element={<div>Exams</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
