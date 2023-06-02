import "./App.css";
import { AddressReqForm } from "./components/AddressReqForm";

function App() {
  return (
    <div className="bg-neutral min-h-screen">
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
      <AddressReqForm />
    </div>
  );
}

export default App;
