import React from "react"
import Signin from "./Page/Signin"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signin" element={<Signin/>}/>
     </Routes>
    </div>
  );
}

export default App;