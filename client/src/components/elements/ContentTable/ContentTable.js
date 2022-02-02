import { findChildren } from "@tiptap/react";
import { useEffect, useState } from "react";

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
    <div>
      {titles.map((item) => (
        <div
          onClick={() => {
            onElementClick();
            document
              .getElementById(`${item.node.attrs.id}`)
              .scrollIntoView({ block: "center" });
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
export default ContentTable;
