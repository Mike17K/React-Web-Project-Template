import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ visibleDropDown, setVisibleDropDown }) {
  return (
    <nav className="w-full bg-black h-[100px]">
        <Link to="/"><img src="logo.svg" alt="logo" className="h-full" /></Link>
    </nav>
  );
}
