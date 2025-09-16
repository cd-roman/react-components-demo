import { useState } from "react";
import "./Wizard.scss";

export const Wizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    const form = document.getElementById(
      `step-${step}-form`
    ) as HTMLFormElement;
    if (form && form.reportValidity()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    const form = document.getElementById(
      `step-${step}-form`
    ) as HTMLFormElement;
    if (form && form.reportValidity()) {
      setSubmitted(true);
      alert("Form Submitted!");
    }
  };

  if (submitted) {
    return <h2 className="submit-message">Form has been submitted!</h2>;
  }

  return (
    <div className="card wizard-container">
      <h2 className="wizard-title">Wizard Example</h2>
      <ProgressIndicator step={step} />

      {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}

      <div className="wizard-buttons-container">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

function ProgressIndicator({ step }: { step: number }) {
  return <p className="wizard-progress-indicator">Step {step} of 3</p>;
}

function Step1({
  formData,
  handleChange,
}: {
  formData: { name: string; email: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form id="step-1-form" className="wizard">
      <h2>Step 1: Personal Details</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={2} // Requires at least 2 characters
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        type="email" // Requires valid email format
        required
      />
    </form>
  );
}

function Step2({
  formData,
  handleChange,
}: {
  formData: { username: string; password: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form id="step-2-form" className="wizard">
      <h2>Step 2: Account Settings</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
        minLength={3} // Requires at least 3 characters
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        minLength={3}
      />
    </form>
  );
}

function Step3({
  formData,
  handleChange,
}: {
  formData: { subscribe: boolean };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form id="step-3-form" className="wizard">
      <h2>Step 3: Preferences</h2>
      <label className="subscribe-checkbox">
        <input
          name="subscribe"
          type="checkbox"
          checked={formData.subscribe}
          onChange={handleChange}
        />{" "}
        Subscribe to newsletter
      </label>
    </form>
  );
}
