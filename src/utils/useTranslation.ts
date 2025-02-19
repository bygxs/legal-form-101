import { useState, useEffect } from "react";

const useTranslation = (language: string): Record<string, any> => {
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    import(`../locales/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch((error) => console.error("Error loading translations:", error));
  }, [language]);

  return translations;
};

export default useTranslation;