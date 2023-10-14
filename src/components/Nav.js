import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Form from "../pages/Form";
import Posts from "../pages/Posts";

// const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
