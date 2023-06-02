import "./App.css";
import { AddressReqForm } from "./components/AddressReqForm";
import { Steps } from "./components/Steps";

function App() {
  return (
    <div className="bg-neutral min-h-screen flex flex-col items-center">
      <div className="navbar bg-base-100 flex justify-center">
        <div>

        <img className="max-h-10" src="/twilight-logo.png"/>
        </div>
        <div>
        <a className="btn btn-ghost normal-case text-2xl text-primary" href="/">
          Twilight
        </a>
        </div>
      </div>
      <div className="gap-y-2">

      <Steps />
      <h1 className="text-2xl text-secondary font-bold">STEP1: GET ADDRESS</h1>
      <AddressReqForm />
      </div>
    </div>
  );
}

export default App;
