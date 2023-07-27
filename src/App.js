import React from "react";

import {Route, Routes} from "react-router-dom"
import './App.css';
// import Aboutpage from "./Aboutpage";
import EashyhaiEducators from "./easyhaiEducators/easyhaieducator";
import Intern from "./internship/internship";
function App() {
  return (
   <div className="App">

    <Routes>
      <Route path="/" element={<EashyhaiEducators/>}></Route>
      <Route path="/intern" element={< Intern/>}></Route>
        
      
    </Routes>
    </div>

  );
}

export default App;
