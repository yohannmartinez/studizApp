import { mergeAttributes, textblockTypeInputRule } from "@tiptap/core";
import { Extension, Node } from "@tiptap/react";
import { Plugin } from "prosemirror-state";

const types = {
  heading: true,
};

const getUuid = () => {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = ""; // -

  return s.join("").substr(0, 6);
};

export const BlockId = Node.create({
  name: "blockId",

  addGlobalAttributes() {
    return [
      {
        types: Object.keys(types),
        attributes: {
          blockId: {
            default: null,
            rendered: false,
            keepOnSplit: false,
          },
        },
      },
    ];
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        appendTransaction: (_transactions, oldState, newState) => {
          // no changes
          if (newState.doc === oldState.doc) {
            return;
          }
          const tr = newState.tr;
          console.log(tr);
          newState.doc.descendants((node, pos, parent) => {
            if (
              node.isBlock &&
              parent === newState.doc &&
              !node.attrs.blockId &&
              types[node.type.name]
            ) {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                blockId: getUuid(),
              });
            }
          });

          return tr;
        },
      }),
    ];
  },
});
