import { Layout } from "antd";
import React, { useEffect, useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { LayoutContext } from "../context";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

const { Sider } = Layout;

const LayoutSider = () => {
  const { collapsed } = useContext(LayoutContext);
  useEffect(() => {
    registerMicroApps(
      [
        {
          name: "app1",
          entry: "http://localhost:3001/",
          container: "#layout-content",
          activeRule: "/app1",
          props: {
            aaaa: 333,
          },
        },
        {
          name: "app2",
          entry: "http://localhost:3002",
          container: "#layout-content",
          activeRule: "/app2",
        },
      ],
      {
        beforeLoad: (app) => console.log("before load", app.name),
        beforeMount: [(app) => console.log("before mount", app.name)],
      }
    );
    start({
      prefetch: false,
      sandbox: false,
      singular: true,
    });
    setDefaultMountApp("/app1/one");
  });
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo></Logo>
      <Menu></Menu>
    </Sider>
  );
};

export default LayoutSider;
