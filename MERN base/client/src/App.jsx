
//functions
import { getTest } from "./api/test";
import Login from "./pages/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./pages/Signup";
import Navbar from './components/navbar';
import PhishingAlert from './components/phishingalert';
import Categories from './components/categories';
import FeaturedItems from './components/featured_items';

function App() {
  

  return (
    <ChakraProvider>
      <div>
        <Navbar/>
        <PhishingAlert/>
        <Categories/>
        <FeaturedItems/>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
