import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/page/Home";
import Quiz from "./assets/page/Quiz";
import { QueryClient , QueryClientProvider} from "@tanstack/react-query";
 
const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-cyan-500 h-max">
      
      <BrowserRouter>
     <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz/:id" element={< Quiz/>} />
        </Routes>
        </QueryClientProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
