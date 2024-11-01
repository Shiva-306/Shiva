import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import "./App.css";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <GoogleOAuthProvider clientId="578842757782-7kf39k0i40d053c1pje0k3cdfui6d546.apps.googleusercontent.com">
       
        <BrowserRouter>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/veg'>Veg-Items</Link>
            <Link to='/nonveg'>NonVeg-Items</Link>
            <Link to='/cart'>Cart({totalItems})</Link>
            <Link to='/purchaseHistory'>Purchase History</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/contactus'>Contact Us</Link>
          </nav>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<NonVeg />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchaseHistory" element={<PurchaseHistory />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;







































/*import { useRef } from "react";
function App(){
const num1Ref=useRef(null);
const num2Ref=useRef(null);
const resultRef=useRef(null);

const handleAddition=()=>{
  const num1=parseFloat(num1Ref.current.value);
  const num2=parseFloat(num2Ref.current.value);
  const sum=num1+num2;
  resultRef.current.value=sum;
};
return(
  <>
  <h2>Addition of two numbers</h2>
  <input ref={num1Ref} type="number" placeholder="Enter first number" />
  <input ref={num2Ref} type="number" placeholder="Enter second number" />
  <input ref={resultRef} type="text" placeholder="Result" readOnly />
  <button onClick={handleAddition}>Add</button>
  </>
)};
export default App;*/




/*import { useRef } from "react";
function App(){
  const mathsRef=useRef(null);
  const scienceRef=useRef(null);
  const socialRef=useRef(null);
  const totalRef=useRef(null);
  const averageRef=useRef(null);

  const handleTotal=()=>{
    const maths=parseFloat(mathsRef.current.value);
    const science=parseFloat(scienceRef.current.value);
   const social=parseFloat(socialRef.current.value);
   const total=parseFloat(totalRef.current.value);
   totalRef.current.value=total;
  }
  const hanleAverage=()=>{
    const maths=parseFloat(mathsRef.current.value);
    const science=parseFloat(scienceRef.current.value);
   const social=parseFloat(socialRef.current.value);
   const average=parseFloat(maths+science+social)/3
   averageRef.current.value=average;
  }
  return(
    <>
    <h1>Marks of a student</h1>
    <label>Maths Marks:</label>
    <input type="number" ref={mathsRef} placeholder="Enter maths marks" />
    <br></br>
    <label>Science Marks:</label>
    <input type="number" ref={scienceRef} placeholder="Enter science marks" />
    <br />
    <label>Social Marks:</label>
    <input type="number" ref={socialRef} placeholder="Enter social marks" />
    <br />
    <label>Total Marks:</label>
    <input type="number" ref={totalRef} placeholder="Enter total marks" />
    <br />
    <button onClick={handleTotal}>Total</button>
    <br />
    <label>Average Marks:</label>
    <input type="number" ref={averageRef} placeholder="Enter total marks" />
    <br />
    <button onClick={hanleAverage}>Average</button>
   
    </>
  )
}
export default App;*/