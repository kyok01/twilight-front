import { useState } from "react";
import "./App.css";
import { AddressReqForm } from "./components/AddressReqForm";
import { Steps } from "./components/Steps";
import { NameDomainForm } from "./components/NameDomainForm";

function App() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [tokenId, setTokenId] = useState<number>();
  const titles = ['REQUEST ADDRESS', 'Register Domain', 'Complete'];
  
  return (
    <div className="bg-neutral min-h-screen flex flex-col items-center">
      <div className="navbar bg-base-100 flex justify-center">
        <div>
          <img className="max-h-10" src="/twilight-logo.png" alt="twilight"/>
        </div>
        <div>
          <a
            className="btn btn-ghost normal-case text-2xl text-primary"
            href="/"
          >
            Twilight
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="mt-4">
          <Steps step={step} stepNames={titles}/>
        </div>
        <h1 className="text-2xl text-secondary font-bold">
          {`STEP${step}: ${titles[step-1]}`}
        </h1>
        {step === 1 &&
        <AddressReqForm setStep={setStep} address={address} setAddress={setAddress}/>
        }
        {step === 2 && 
        <NameDomainForm address={address} setStep={setStep} setTokenId={setTokenId} />
        }
      </div>
    </div>
  );
}

export default App;
