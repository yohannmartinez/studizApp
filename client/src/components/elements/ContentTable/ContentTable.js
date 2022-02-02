import { useEffect, useState } from "react";
import "./ContentTable.scss";

const ContentTable = ({ lessonContentToJson, onElementClick }) => {
  const [titles, setTitles] = useState([]);
  console.log(lessonContentToJson);

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
      {titles.length > 0
        ? titles.map((item) => (
            <div
              key={`contentTable__element${item.node.attrs.id}`}
              onClick={() => {
                onElementClick();
                console.log(item.node.attrs);
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
                fontSize: item.node.attrs.level === 1 ? "17px" : "14px",
              }}
            >
              {item.title}
            </div>
          ))
        : "Aucun titre dans ce cours"}
    </div>
  );
};
export default ContentTable;
