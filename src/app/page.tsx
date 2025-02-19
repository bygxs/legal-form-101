"use client";
import { useState } from "react";

// Define types for formData
interface FormData {
  fullName: string;
  phone: string;
  email: string;
  zipCode: string;
  description: string;
}

// Define type for translations object
interface Translations {
  [key: string]: {
    title: string;
    subtitle: string;
    description: string;
    howItWorks: string;
    steps?: string[]; // Optional because it might not always exist
    startButton: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    zipCodeLabel: string;
    descriptionLabel: string;
    submitButton: string;
    confirmationTitle: string;
    confirmationMessage: string;
    termsMessage: string;
    disclaimer: string[];
  };
}

// Define translations object (moved outside LegalPage for reusability)
const translations: Translations = {
  en: {
    title: "Legal Issues Explained",
    subtitle: "Find the Right Attorney for Free",
    description:
      "Get matched with qualified attorneys for a consultation in just 60 seconds. Risk-free consultations — no obligation to hire licensed, local attorneys from our network.",
    howItWorks: "How It Works",
    steps: [
      "Describe your legal issue",
      "Get matched with local attorneys",
      "Have your case evaluated",
    ], // Ensure steps are defined
    startButton: "Start",
    formTitle: "Start Here to Find the Right Attorney for Free",
    formSubtitle: "Takes only a minute | No obligation to hire",
    fullNameLabel: "What is your full name? *",
    phoneLabel: "What is your phone number? *",
    emailLabel: "What is your email address? *",
    zipCodeLabel: "What is your zip code? *",
    descriptionLabel:
      "To better match you with an attorney, please briefly describe your case. *",
    submitButton: "Get My Consultation",
    confirmationTitle: "Thank you for your submission!",
    confirmationMessage: "Lawyers typically respond in 1-2 hours.",
    termsMessage:
      "By submitting this form, you agree to the Terms of Use and Privacy Policy...",
    disclaimer: [
      "By submitting this form I agree to the Terms of Use and Privacy Policy and consent to be contacted by LawyerApp, and up to three attorneys regarding this request and to receiving relevant marketing messages by automated means, text and/or prerecorded messages at the number provided. Consent is not required as a condition of service, click here to agree without providing consent to be contacted by automated means, text and/or prerecorded messages. Rates may apply.",
      "You should not send any sensitive or confidential information through this site. Any information sent through this site does not create an attorney-client relationship and may not be treated as privileged or confidential. Information you provide on this site is subject to our privacy policy. The lawyer or law firm you are contacting is not required to, and may choose not to, accept you as a client. The Internet is not necessarily secure and emails sent through this site could be intercepted or read by third parties.",
    ],
  },
  es: {
    title: "Problemas Legales Explicados",
    subtitle: "Encuentra el Abogado Correcto de Forma Gratuita",
    description:
      "Obtén una cita con abogados cualificados en solo 60 segundos. Consultas sin riesgo — no hay obligación de contratar abogados locales y licenciados de nuestra red.",
    howItWorks: "Cómo Funciona",
    steps: [
      "Describe tu problema legal",
      "Recibe coincidencias con abogados locales",
      "Evalúa tu caso",
    ], // Ensure steps are defined
    startButton: "Comenzar",
    formTitle:
      "Empieza Aquí para Encontrar el Abogado Correcto de Forma Gratuita",
    formSubtitle: "Solo tarda un minuto | Sin compromiso de contratación",
    fullNameLabel: "¿Cuál es tu nombre completo? *",
    phoneLabel: "¿Cuál es tu número de teléfono? *",
    emailLabel: "¿Cuál es tu dirección de correo electrónico? *",
    zipCodeLabel: "¿Cuál es tu código postal? *",
    descriptionLabel:
      "Para emparejarte mejor con un abogado, por favor describe brevemente tu caso. *",
    submitButton: "Obtener Mi Consulta",
    confirmationTitle: "¡Gracias por tu solicitud!",
    confirmationMessage: "Los abogados suelen responder en 1-2 horas.",
    termsMessage:
      "Al enviar este formulario, aceptas los Términos de Uso y la Política de Privacidad...",
    disclaimer: [
      "Al enviar este formulario, acepto los Términos de Uso y la Política de Privacidad y consiento ser contactado por LawyerApp y hasta tres abogados sobre esta solicitud y recibir mensajes de marketing relevantes mediante medios automatizados, texto y/o mensajes pregrabados al número proporcionado. El consentimiento no es necesario como condición del servicio, haz clic aquí para aceptar sin proporcionar consentimiento para ser contactado mediante medios automatizados, texto y/o mensajes pregrabados. Pueden aplicarse tarifas.",
      "No debes enviar ninguna información sensible o confidencial a través de este sitio. Cualquier información enviada a través de este sitio no crea una relación abogado-cliente y puede no ser tratada como privilegiada o confidencial. La información que proporcionas en este sitio está sujeta a nuestra política de privacidad. El abogado o bufete de abogados con el que te estás comunicando no está obligado a, y puede elegir no, aceptarte como cliente. Internet no es necesariamente seguro y los correos electrónicos enviados a través de este sitio pueden ser interceptados o leídos por terceros.",
    ],
  },
};

// Interface for Disclaimer component props
interface DisclaimerProps {
  language: string;
  translations: Translations;
}

// Disclaimer Component
const Disclaimer = ({ language, translations }: DisclaimerProps) => {
  return (
    <div className="mt-6 text-sm text-gray-500">
      {/* Render the first part of the disclaimer */}
      <p className="mb-4">{translations[language]?.disclaimer?.[0]}</p>
      {/* Render the second part of the disclaimer */}
      <p>{translations[language]?.disclaimer?.[1]}</p>
    </div>
  );
};

// Main LegalPage Component
const LegalPage = () => {
  const [step, setStep] = useState<number>(1); // Track form steps
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    zipCode: "",
    description: "",
  });
  const [language, setLanguage] = useState<string>("en"); // Track selected language

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
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${
            language === "en"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          🇺🇸 EN
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={`ml-2 px-4 py-2 rounded ${
            language === "es"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          🇪🇸 ES
        </button>
      </div>

      {/* Step 1: Introduction */}
      {step === 1 && (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {translations[language]?.title}
          </h1>
          <h2 className="text-2xl mt-2">{translations[language]?.subtitle}</h2>
          <p className="mt-4">{translations[language]?.description}</p>
          <h3 className="text-xl mt-6">{translations[language]?.howItWorks}</h3>
          <ol className="list-decimal pl-5 mt-2">
            {/* Safely access steps with optional chaining and fallback */}
            {translations[language]?.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(2)}
          >
            {translations[language]?.startButton}
          </button>
          <Disclaimer language={language} translations={translations} />
        </div>
      )}

      {/* Step 2: Form */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="mt-6">
          <h3 className="text-2xl">{translations[language]?.formTitle}</h3>
          <p>{translations[language]?.formSubtitle}</p>
          <div className="mt-4">
            <label htmlFor="fullName" className="block">
              {translations[language]?.fullNameLabel}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="block">
              {translations[language]?.phoneLabel}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block">
              {translations[language]?.emailLabel}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="zipCode" className="block">
              {translations[language]?.zipCodeLabel}
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="block">
              {translations[language]?.descriptionLabel}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
          >
            {translations[language]?.submitButton}
          </button>
          <Disclaimer language={language} translations={translations} />
        </form>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="mt-6">
          <h3 className="text-2xl">
            {translations[language]?.confirmationTitle}
          </h3>
          <p className="mt-4">{translations[language]?.confirmationMessage}</p>
          <p className="mt-4 mb-2">{translations[language]?.termsMessage}</p>
          <Disclaimer language={language} translations={translations} />
        </div>
      )}
    </div>
  );
};

export default LegalPage;

/**
 * Key Changes Made:
 * 1. Fixed the error by ensuring `steps` exists in the `translations` object for both languages.
 * 2. Used optional chaining (`?.`) to safely access `translations[language]?.steps` with a fallback.
 * 3. Added TypeScript types for `translations`, `formData`, and `DisclaimerProps`.
 * 4. Added detailed comments explaining each section, especially where errors were fixed.
 * 5. Ensured all state variables are properly initialized using `useState`.
 */
