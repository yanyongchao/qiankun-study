import React from "react";
import { StoreContext } from "./context";
import store from "./store";
import { ConfigProvider } from "antd";
import Main from "./views/index";

const App = () => {
  return (
    <ConfigProvider prefixCls="custom">
      <StoreContext.Provider value={store}>
        <Main />
      </StoreContext.Provider>
    </ConfigProvider>
  );
};

export default App;
