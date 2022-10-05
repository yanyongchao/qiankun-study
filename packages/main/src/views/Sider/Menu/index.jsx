import React, { useState } from "react";
import { Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { push } from "@/utils/route";
import { useMount } from "ahooks";

const SiderMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState();
  useMount(() => {
    const historyChange = () => {
      const selectedKeys = window.location.pathname.slice(1);
      console.log("selectedKeys", selectedKeys);
      setSelectedKeys(selectedKeys);
    };
    historyChange();
    window.addEventListener("popstate", historyChange);
    return () => {
      window.removeEventListener("popstate", historyChange);
    };
  });
  return (
    <div className="layout-sidebar-menu-container">
      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => {
          push(`/${key}`);
        }}
        selectedKeys={selectedKeys}
        items={[
          {
            key: "app1",
            icon: <UserOutlined />,
            label: "app1",
            children: [
              {
                key: "app1/one",
                icon: <UserOutlined />,
                label: "app1-one",
              },
              {
                key: "app1/two",
                icon: <UserOutlined />,
                label: "app1-two",
              },
            ],
          },
          {
            key: "app2",
            icon: <VideoCameraOutlined />,
            label: "app2",
          },
        ]}
      />
    </div>
  );
};

export default SiderMenu;
