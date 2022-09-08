import React from "react";
import TypingCard from "@/components/TypingCard";
const Doc = () => {
  const modifyVars = () => {
    console.log("xx");
    const color = "f04144";
    window.less.modifyVars({
      "@primary-color": `#${color}`,
      "@primary-shade-color": `shade(#${color}, 25%)`,
      "@primary-tint-color": `tint(#${color}, 80%)`,
    });
  };
  const cardContent = `
    作者博客请戳这里 <a href="https://nlrx-wjc.github.io/Blog/" target="_blank">难凉热血的博客</a>。
    欢迎大家与我交流，如果觉得博客不错，也麻烦给博客赏个 star 哈。
  `;
  return (
    <div className="app-container" onClick={modifyVars}>
      <TypingCard title="作者博客" source={cardContent} />
    </div>
  );
};

export default Doc;
