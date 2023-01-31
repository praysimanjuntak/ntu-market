
//functions
import { getTest } from "./api/test";
import Login from "./pages/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./pages/Signup";

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
