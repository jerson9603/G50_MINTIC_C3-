import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/components/miNavbar.css";
import { NavBarCollapse } from "./nav-bar-collapse";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light" className="miNavbar">
      <Navbar.Brand href="/home">
        <img
          width="30"
          className="me-2"
          src="https://cdn1.iconfinder.com/data/icons/zeon-medical-i-2/32/pharmacy_shop_drug_medicine-256.png"
          alt="logo"
        />
        Drogueria
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavBarCollapse />
    </Navbar>
  );
};
