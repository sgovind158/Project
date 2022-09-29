import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Componets/Login";
import ReqAuth from "../Componets/ReqAuth";
import SignUp from "../Componets/SignUp";
import AddProduct from "./AddProduct";
import Home from "./Home";
import Logout from "./Logout";
import Products from "./Products";
import Profile from "./Profile";
import UpdateProduct from "./UpdateProduct";
const MainRoutes = () => {
    const auth = localStorage.getItem("user")
  return (
    <Routes>
      <Route element={<ReqAuth/>}>
      <Route  path="/" element={  <Home /> } />
      <Route  path="/add"  element={ <AddProduct />} />
      <Route  path="/products"element={  <Products />} />
      <Route path="/profile" element={<Profile /> } />
      <Route path="/update/:id" element={<UpdateProduct />} />
      </Route>

  {/* {auth? <Route path="/logout" element={ <Logout /> }/>: <Route path="/signup" element={<SignUp />} />}
     */}

     
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
};

export default MainRoutes;
