import React from "react";
import { Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const SiderMenu = () => {
  return (
    <div className="layout-sidebar-menu-container">
      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => {}}
        selectedKeys={["/app1"]}
        items={[
          {
            key: "/app1",
            icon: <UserOutlined />,
            label: "app1",
          },
          {
            key: "/app2",
            icon: <VideoCameraOutlined />,
            label: "app2",
          },
        ]}
      />
    </div>
  );
};

export default SiderMenu;
