import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Marketplace from './pages/Marketplace';
import Products from './pages/Products'
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Kart from './pages/Kart';
import Payment from './pages/Payment';
import ContactUs from './pages/ContactUs';
import Clubs from './pages/Clubs';
import Club1 from './pages/Club1';
import Club2 from './pages/Club2';
import Club3 from './pages/Club3';
import Club4 from './pages/Club4';
import StudentProfile from './pages/StudentProfile';
import BoHome from './pages/BoHome';
import SchoolAdmin from './pages/SchoolAdmin';
import SuperAdmin from './pages/SuperAdmin';
import ForgotPassword from './pages/forgotpassword';
import Inventory from './pages/Inventory';
import CreateAD from './pages/CreateAd';
import Return from './pages/Return';
import AddProduct from './pages/AddProduct';
import AddClub from './pages/Addclub';
import Orders from './pages/orders';
import Boorders from './pages/Boorders';
import BoChat from './pages/BoChat';
import UpdateInfo from './pages/UpdateInfo';
import UpdatefromSuper from './pages/UpdatefromSuper';

import{
    BrowserRouter as Router,
    Routes, Route, useNavigate, Redirect, Link} from "react-router-dom";

// var navLinks = document.getElementById("navLinks");
export function showMenu(){
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "0";
  // console.log("show menu");
}
export function hideMenu(){
  var navLinks = document.getElementById("navLinks");
  navLinks.style.right = "-200px";
  // console.log("Hide Menu");
}

function App() {
  return (

    // <h1>Hello </h1>
    
     <Router>
       <Routes>
         <Route path='/' element = {<Index/>}/>
         <Route path='/index' element = {<Index/>}/>
         <Route path='/aboutus' element = {<AboutUs/>}/>
         <Route path='/login' element = {<Login/>}/>
         <Route path='/marketplace' element = {<Marketplace/>}/>
         <Route path='/products' element = {<Products/>}/>
         <Route path='/register' element = {<Register/>}/>
         <Route path='/product1' element = {<Product1/>}/>
         <Route path='/product2' element = {<Product2/>}/>
         <Route path='/product3' element = {<Product3/>}/>
         <Route path='/product4' element = {<Product4/>}/>
         <Route path='/kart' element = {<Kart/>}/>
         <Route path='/contactus' element = {<ContactUs/>}/>
         <Route path='/payment' element = {<Payment/>}/>
         <Route path='/clubs' element = {<Clubs/>}/>
         <Route path='/club1' element = {<Club1/>}/>
         <Route path='/club2' element = {<Club2/>}/>
         <Route path='/club3' element = {<Club3/>}/>
         <Route path='/club4' element = {<Club4/>}/>
         <Route path='/studentprofile' element = {<StudentProfile/>}/>
         <Route path='/bohome' element = {<BoHome/>}/>
         <Route path='/schooladmin' element = {<SchoolAdmin/>}/>
         <Route path='/superadmin' element = {<SuperAdmin/>}/>
         <Route path='/forgotpass' element = {<ForgotPassword/>}/>
         <Route path='/inventory' element = {<Inventory/>}/>
         <Route path='/return' element = {<Return/>}/>
         <Route path='/addproduct' element = {<AddProduct/>}/>
         <Route path='/AddClub' element = {<AddClub/>}/>
         <Route path='/createad' element = {<CreateAD/>}/>
         <Route path='/orders' element = {<Orders/>}/>
         <Route path='/boorders' element = {<Boorders/>}/>
         <Route path='/bochat' element = {<BoChat/>}/>
         <Route path='/updateinfo' element = {<UpdateInfo/>}/>
         <Route path='/updatefromsuper' element = {<UpdatefromSuper/>}/>
    
       </Routes>
     </Router> 

  );
}

export default App;

