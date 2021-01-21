import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
