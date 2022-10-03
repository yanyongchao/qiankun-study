import React, { useContext } from "react";
import { Menu, Dropdown, Modal, Layout, Avatar } from "antd";
import FullScreen from "@/components/FullScreen";
import Settings from "@/components/Settings";
import BreadCrumb from "@/components/BreadCrumb";
import { LayoutContext } from "../context";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const LayoutHeader = () => {
  const { collapsed, setCollapsed } = useContext(LayoutContext);
  const menu = (
    <Menu>
      <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/NLRX-WJC/react-antd-admin-template"
          rel="noopener noreferrer"
        >
          项目地址
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">注销</Menu.Item>
    </Menu>
  );
  return (
    <Header className="layout-header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        style: { marginLeft: 10, fontSize: 18 },
        onClick: () => setCollapsed(!collapsed),
      })}
      <BreadCrumb />
      <div className="layout-header-menu">
        <FullScreen />
        <Settings />
        <Dropdown overlay={menu}>
          <div className="menu-wrapper">
            <Avatar
              shape="square"
              size="medium"
              src={"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg"}
            />
            <CaretDownOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default LayoutHeader;
