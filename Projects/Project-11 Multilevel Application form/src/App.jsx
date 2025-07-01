import React,{useState} from 'react'
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressBar from './components/ProgressBar';

export default function App(){
  const[step,setStep] = useState(1);
  const[formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    college: '',
  });

  const nextStep =() =>setStep((prev) => prev + 1);
  const preStep = () => setStep((prev) => prev - 1);

  const handleChange =(e) => {
    setFormData({
      ...formData, [e.target.name]:e.target.value});
    };
    return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <ProgressBar step={step} />
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={preStep} />}
        {step === 3 && <Step3 formData={formData} prevStep={preStep} />}
      </div>
    </div>
  );
}