
//functions
import * as React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react';
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
      <div >
        <Navbar/>
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
          <PhishingAlert/>
          <Categories/>
          <FeaturedItems/>
        </Container>
        
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
