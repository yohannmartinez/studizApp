import { useEffect, useState } from "react";
import "./ContentTable.scss";

const ContentTable = ({ lessonContentToJson, onElementClick }) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const items = [];
    lessonContentToJson.content
      .filter((block) => block.type === "heading")
      .forEach((block) => {
        const fullTitle = block.content.map(({ text }) => text).join("");
        const titleLevel = block.attrs.level;
        items.push({ title: fullTitle, level: titleLevel, node: block });
      });
    setTitles(items);
  }, []);

  return (
    <div className="contentTable__container">
      {titles.length > 0 ? (
        titles.map((item) => (
          <div
            key={`contentTable__element${item.node.attrs.id}`}
            onClick={() => {
              onElementClick();
              document
                .getElementById(`${item.node.attrs.id}`)
                .scrollIntoView({ block: "center" });
              document
                .getElementById(`${item.node.attrs.id}`)
                .animate(
                  [{ backgroundColor: "#c7b9db" }, { backgroundColor: null }],
                  {
                    // timing options
                    duration: 2000,
                    iterations: 3,
                  }
                );
            }}
            className="contentTable__element"
            style={{
              fontSize: item.node.attrs.level === 1 ? "15px" : "14px",
              fontWeight: item.node.attrs.level === 1 ? "bold" : "normal",
            }}
          >
            {item.title}
          </div>
        ))
      ) : (
        <span className="contentTable__noTitle">Aucun titre dans ce cours</span>
      )}
    </div>
  );
};
export default ContentTable;
