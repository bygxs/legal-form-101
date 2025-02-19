"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// Define types for formData
interface FormData {
  fullName: string;
  phone: string;
  email: string;
  zipCode: string;
  description: string;
}

const LegalPage = () => {
  const [step, setStep] = useState<number>(1); // Track form steps (1: Introduction, 2: Form, 3: Confirmation)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    zipCode: "",
    description: "",
  });

  // Handle form changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(3); // Go to the confirmation step after form submission
  };

  return (
    <div className="container p-4">
      {step === 1 && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Legal Issues Explained</h1>
          <h2 className="text-2xl mt-2">Find the Right Attorney for Free</h2>
          <p className="mt-4">
            Get matched with qualified attorneys for a consultation in just 60
            seconds. Risk-free consultations — no obligation to hire licensed,
            local attorneys from our network.
          </p>

          <h3 className="text-xl mt-6">How It Works</h3>
          <ol className="list-decimal pl-5 mt-2">
            <li>Describe your legal issue</li>
            <li>Get matched with local attorneys</li>
            <li>Have your case evaluated</li>
          </ol>

          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(2)}
          >
            Start
          </button>
          <Disclaimer />
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="mt-6">
          <h3 className="text-2xl">
            Start Here to Find the Right Attorney for Free
          </h3>
          <p>Takes only a minute | No obligation to hire</p>

          <div className="mt-4">
            <label htmlFor="fullName" className="block">
              What is your full name? *
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
              What is your phone number? *
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
              What is your email address? *
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
              What is your zip code? *
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
              To better match you with an attorney, please briefly describe your
              case. *
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
            Get My Consultation
          </button>
          <Disclaimer />
        </form>
      )}

      {step === 3 && (
        <div className="mt-6">
          <h3 className="text-2xl">Thank you for your submission!</h3>
          <p className="mt-4">Lawyers typically respond in 1-2 hours.</p>
          <p className="mt-4 mb-2">
            By submitting this form, you agree to the Terms of Use and Privacy
            Policy. You consent to be contacted by LawyerApp and up to three
            attorneys regarding this request. You may receive relevant marketing
            messages by automated means, text, and/or prerecorded messages at
            the number provided. Rates may apply.
          </p>
          <p className="mt-4">
            You should not send any sensitive or confidential information
            through this site. Any information sent through this site does not
            create an attorney-client relationship and may not be treated as
            privileged or confidential.
          </p>
        </div>
      )}
    </div>
  );
};

const Disclaimer = () => (
  <div className="mt-6 text-sm text-gray-500">
    <p className="mb-4">
      By submitting this form I agree to the Terms of Use and Privacy Policy and
      consent to be contacted by LawyerApp, and up to three attorneys regarding
      this request and to receiving relevant marketing messages by automated
      means, text and/or prerecorded messages at the number provided. Consent is
      not required as a condition of service, click here to agree without
      providing consent to be contacted by automated means, text and/or
      prerecorded messages. Rates may apply.
    </p>

    <p>
      You should not send any sensitive or confidential information through this
      site. Any information sent through this site does not create an
      attorney-client relationship and may not be treated as privileged or
      confidential. Information you provide on this site is subject to our
      privacy policy. The lawyer or law firm you are contacting is not required
      to, and may choose not to, accept you as a client. The Internet is not
      necessarily secure and emails sent through this site could be intercepted
      or read by third parties.
    </p>
  </div>
);

export default LegalPage;
