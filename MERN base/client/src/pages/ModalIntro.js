import { Avatar, Button, Img } from "@chakra-ui/react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ModalIntro() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
    <Background
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#313690"
        >
        <Img src ='/LOGO.png'></Img>
        <div>
        {showButton && (
        <Link to={'/house'} colorScheme='white'>Enter</Link>
        )}
        </div>
        
    </Background>
    
    <Footer/>
    </>
  );
}

export default ModalIntro;
