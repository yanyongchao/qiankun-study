import { Layout } from "antd";
import React, { useState, useMemo } from "react";
import Sider from "./Sider";
import Header from "./Header";
import { LayoutContext } from "./context";
import Content from "./Content";
import "./index.less";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  const contextVal = useMemo(() => {
    return {
      collapsed,
      setCollapsed,
    };
  }, [collapsed]);

  return (
    <LayoutContext.Provider value={contextVal}>
      <Layout>
        <Sider></Sider>
        <Layout className="layout">
          <Header className="layout-header"></Header>
          <Content></Content>
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
};

export default Main;
