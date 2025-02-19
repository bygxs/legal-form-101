interface LanguageSelectorProps {
    onChange: (language: string) => void;
  }
  
  const LanguageSelector = ({ onChange }: LanguageSelectorProps) => {
    return (
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => onChange("en")}
          className="px-4 py-2 rounded bg-gray-200 text-black"
        >
          🇺🇸 EN
        </button>
        <button
          onClick={() => onChange("es")}
          className="ml-2 px-4 py-2 rounded bg-gray-200 text-black"
        >
          🇪🇸 ES
        </button>
        {/* Add more languages here */}




        
      </div>
    );
  };
  
  export default LanguageSelector;