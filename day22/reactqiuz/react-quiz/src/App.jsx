import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/page/Home";
import Quiz from "./assets/page/Quiz";

function App() {
  return (
    <>
    <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-cyan-500  h-1000vh">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
