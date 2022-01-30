import { useCallback, useState } from "react";

import { store } from "../store";
import { fr } from "../lang/fr";
import { en } from "../lang/en";

/**
 * @param {String} id id of the translate ex "EMAIL_ADDRESS"
 * @param {Array} args arguments to replace in trad ex [{argument: "{user}", value: "test"}]
 * @returns
 */
export const useTranslate = () => {
  const t = useCallback((id, args) => {
    const languages = {
      fr: fr,
      en: en,
    };
    const currentLanguage = store.getState().language.current_language;
    let translate = languages[currentLanguage][id] || "translate_error";
    if (args) {
      args.map(({ argument, value }) => {
        return (translate = translate.replace(argument, value));
      });
    }
    return translate;
  }, []);
  return { t };
};
