import {BrowserRouter as Router,Route,Routes }from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import RandomTable from "./components/RandomTable";


function App() {
  return (
    
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<RandomTable/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

   </div>
  );
}

export default App;
