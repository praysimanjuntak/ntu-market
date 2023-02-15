
//functions
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { getTest } from "./api/test";
import Login from "./pages/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./pages/Signup";
import Navbar from './components/navbar';

function App() {
  

  return (
    <ChakraProvider>
      <div>
        <Navbar/>
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
