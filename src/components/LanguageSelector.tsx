interface LanguageSelectorProps {
  onChange: (language: string) => void;
  currentLanguage: string; // Add a prop to track the current language
}

const LanguageSelector = ({ onChange, currentLanguage }: LanguageSelectorProps) => {
  return (
    <div className="flex justify-end mb-4">
      {/* English Button */}
      <button
        onClick={() => onChange("en")} // Pass as a callback
        className={`px-4 py-2 rounded ${currentLanguage === "en" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
      >
        🇺🇸 EN
      </button>

      {/* Spanish Button */}
      <button
        onClick={() => onChange("es")} // Pass as a callback
        className={`ml-2 px-4 py-2 rounded ${currentLanguage === "es" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
      >
        🇪🇸 ES
      </button>

      {/* Ethiopian (Amharic) Button */}
      <button
        onClick={() => onChange("am")} // Pass as a callback
        className={`ml-2 px-4 py-2 rounded ${currentLanguage === "am" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
      >
        🇪🇹 AM
      </button>

      {/* Eritrean (Tigrinya) Button */}
      <button
        onClick={() => onChange("ti")} // Pass as a callback
        className={`ml-2 px-4 py-2 rounded ${currentLanguage === "ti" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
      >
        🇪🇷 TI
      </button>
    </div>
  );
};

export default LanguageSelector;