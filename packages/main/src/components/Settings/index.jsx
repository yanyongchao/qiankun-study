import React, { useState } from "react";
import { Tooltip, Drawer, Row, Col } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import ColorInput from "../ColorInput";
import { useSettings } from "@/hooks";
import { observer } from "mobx-react";
import { ConfigProvider } from "antd";

import "./index.less";
const Settings = observer(() => {
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useSettings();
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <SettingOutlined
          onClick={() => {
            setVisible(true);
          }}
        />
      </Tooltip>
      <Drawer
        title="系统设置"
        placement="right"
        width={350}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Row>
          <Col span={12}>
            <span>主题色</span>
          </Col>
          <Col span={12}>
            <ColorInput
              value={theme}
              onChange={(color) => {
                setTheme(color);
                ConfigProvider.config({
                  prefixCls: "custom",
                  theme: {
                    primaryColor: color,
                  },
                });
                window.less.modifyVars({
                  "@primary-color": color,
                });
              }}
            ></ColorInput>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
});

export default Settings;
