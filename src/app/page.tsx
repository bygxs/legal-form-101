"use client";
import { useState } from "react";
import useTranslation from "@/utils/useTranslation";
import LanguageSelector from "@/components/LanguageSelector";
import Disclaimer from "@/components/Disclaimer";

const LegalPage = () => {
  const [language, setLanguage] = useState("en");
  const translations = useTranslation(language);

  // State for form data
  const [step, setStep] = useState(1); // Track form steps
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    zipCode: "",
    description: "",
  });

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Move to the confirmation step
  };

  return (
    <div className="container p-4">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        {/* English Button */}
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          🇺🇸 EN
        </button>
        {/* Spanish Button */}
        <button
          onClick={() => setLanguage("es")}
          className={`ml-2 px-4 py-2 rounded ${language === "es" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          🇪🇸 ES
        </button>
        {/* Ethiopian (Amharic) Button */}
        <button
          onClick={() => setLanguage("am")}
          className={`ml-2 px-4 py-2 rounded ${language === "am" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          🇪🇹 AM
        </button>
        {/* Eritrean (Tigrinya) Button */}
        <button
          onClick={() => setLanguage("ti")}
          className={`ml-2 px-4 py-2 rounded ${language === "ti" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          🇪🇷 TI
        </button>
      </div>

      {/* Step 1: Introduction */}
      {step === 1 && (
        <div>
          <h1 className="text-3xl font-bold mb-4">{translations.title}</h1>
          <h2 className="text-2xl mt-2">{translations.subtitle}</h2>
          <p className="mt-4">{translations.description}</p>
          <h3 className="text-xl mt-6">{translations.howItWorks}</h3>
          <ol className="list-decimal pl-5 mt-2">
            {translations.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(2)}
          >
            {translations.startButton}
          </button>
          <Disclaimer language={language} />
        </div>
      )}

      {/* Step 2: Form */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="mt-6">
          <h3 className="text-2xl">{translations.formTitle}</h3>
          <p>{translations.formSubtitle}</p>

          {/* Full Name */}
          <div className="mt-4">
            <label htmlFor="fullName" className="block">
              {translations.fullNameLabel}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label htmlFor="phone" className="block">
              {translations.phoneLabel}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email" className="block">
              {translations.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Zip Code */}
          <div className="mt-4">
            <label htmlFor="zipCode" className="block">
              {translations.zipCodeLabel}
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Case Description */}
          <div className="mt-4">
            <label htmlFor="description" className="block">
              {translations.descriptionLabel}
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {translations.submitButton}
          </button>
          <Disclaimer language={language} />
        </form>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="mt-6">
          <h3 className="text-2xl">{translations.confirmationTitle}</h3>
          <p className="mt-4">{translations.confirmationMessage}</p>
          <p className="mt-4">{translations.termsMessage}</p>
          <Disclaimer language={language} />
        </div>
      )}
    </div>
  );
};

export default LegalPage;