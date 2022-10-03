import React, { useRef } from "react";
import { Input, Popover } from "antd";
import { SketchPicker } from "react-color";
import "./index.less";

const ColorInput = (props) => {
  const container = useRef();
  const color = props.value;
  return (
    <div ref={container} className="color-input" style={props.style ?? {}}>
      <Input
        value={props.value}
        onChange={(e) => {
          props.onChange?.(e.target.value);
        }}
        placeholder="Color"
        prefix={
          <Popover
            autoAdjustOverflow
            trigger="click"
            overlayInnerStyle={{ padding: 0 }}
            getPopupContainer={() => container.current}
            content={
              <SketchPicker
                color={color}
                onChange={({ rgb }) => {
                  props.onChange(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                }}
              />
            }
          >
            <div
              className={"color-tips"}
              style={{
                backgroundColor: color,
              }}
            />
          </Popover>
        }
      />
    </div>
  );
};

export default ColorInput;
