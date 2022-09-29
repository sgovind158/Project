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
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route
        path="/add"
        element={
          <ReqAuth>
            <AddProduct />
          </ReqAuth>
        }
      />
     
      <Route
        path="/products"
        element={
          <ReqAuth>
            <Products />
          </ReqAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <ReqAuth>
            <Profile />
          </ReqAuth>
        }
      />
     

      {auth? <Route path="/logout" element={
          <ReqAuth>
            <Logout />
          </ReqAuth>
        }/>: <Route path="/signup" element={<SignUp />} />}
     
     <Route path="/update" element={<UpdateProduct />} />
     <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default MainRoutes;
