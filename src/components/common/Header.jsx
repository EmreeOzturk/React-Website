import { Anchor } from "antd";
import React from "react";

const { Link } = Anchor;
const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">WEBEMRE</a>
        </div>
       
        <Anchor>
          <Link href="#home" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#features" title="Features" />
          <Link href="#works" title="How It Works" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        
        </Anchor>
      </div>
    </div>
  );
};
export default AppHeader;
