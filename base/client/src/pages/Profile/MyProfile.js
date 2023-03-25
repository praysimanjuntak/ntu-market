import { Container, Flex, WrapItem, Heading } from "@chakra-ui/react";
import Background from "../../components/Background";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import TopPicture from "./Components/TopPicture";
import ProfileBody from "./Components/ProfileBody";
import { useState } from "react";
function MyProfile(props){

    return(
        <>
        <Navbar />
            <TopPicture 
            imageUrl="https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg"
            profileImageUrl="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            > 
            </TopPicture>
            <ProfileBody/>
        <Footer/>
        </>
    )
}
export default MyProfile;