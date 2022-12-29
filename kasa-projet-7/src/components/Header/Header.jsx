import React from "react";
import LOGO from "../assets/LOGO.png";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src={LOGO} alt="" />
      <Navbar />
    </div>
  );
}
export default Header;
