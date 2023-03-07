import React from "react";
import { Container } from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import ListingCard from '../components/ListingCard';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";
function Home(){
    return(
      <>
      <Navbar/>
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
          <PhishingAlert/>
        <ListingCard />
        </Container>
        
      <Footer/>
      </>
    )
}
export default Home;