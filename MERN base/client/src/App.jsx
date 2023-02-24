import { getTest } from "./api/test";
import Login from "./pages/Login";
import LoginSignUp from "./pages/LoginSignUp";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Authentication from "./pages/Authentication";
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet'
import MyChats from './pages/MyChats';
import Notifications from './pages/Notifications';
import Wishlist from './pages/Wishlist';
import Details from './pages/Product/Details'
import Payment from './pages/Product/Payment';
import Chat from './pages/Product/Chat';
import ConfirmationBuy from './pages/Product/ConfirmationBuy'
import Profile from './pages/Profile';
import Listings from './components/Listings';
import Reviews from './components/Reviews';
import Listing from './pages/Listing/Listing';
import ConfirmationList from './pages/Listing/ConfirmationList';
import {ChakraProvider} from "@chakra-ui/react";
import ModalIntro from "./pages/ModalIntro";
import House from "./pages/House";
function App() {
  return (
    <>
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<ModalIntro/>}/>
          <Route path="/loginSignUp" element={<LoginSignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
            <Route path='authentication' element={<Authentication/>}/>
          <Route path='/house' element={<House/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/myProfile' element={<MyProfile/>}>
            <Route path='myListings' element={<Listings/>}/>
            <Route path='myReviews' element={<Reviews/>}/>
          </Route>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/myChats' element={<MyChats/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/details' >
            <Route index element={<Details/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='chat' element={<Chat/>}/>
            <Route path='confirmationBuy' element={<ConfirmationBuy/>}/>
          </Route>
          <Route path='/profile' element={<Profile/>}>
            <Route path='listings' element={<Listings/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='/newListing'>
            <Route index element={<Listing/>}/>
            <Route path='confirmation' element={<ConfirmationList/>}/>
          </Route>
        </Routes>
        
    </ChakraProvider>
    </>
  );
}

export default App;
