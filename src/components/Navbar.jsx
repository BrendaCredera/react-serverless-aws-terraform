import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const { Header } = Layout;

const Navbar = () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>

      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/about">About</Link>
      </Menu.Item>

      <Menu.Item key='3'>
        <Link to="/contact-us">Contact Us</Link>
      </Menu.Item>


      <Menu.Item key="4">
        <AmplifySignOut />
      </Menu.Item>
    </Menu>
  </Header>
);

export default Navbar;
