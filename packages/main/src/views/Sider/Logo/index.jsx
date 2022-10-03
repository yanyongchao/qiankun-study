import React from "react";
import logo from "@/assets/images/logo.svg";
const SiderLogo = () => {
  return (
    <div className="layout-sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h1 className="sidebar-title">我欲成风</h1>
    </div>
  );
};

export default SiderLogo;
