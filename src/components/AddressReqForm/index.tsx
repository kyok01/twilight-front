import { memo, } from "react";
import { useAddressReqForm } from "./useAddressReqForm";

type AddressReqFormProp = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setTwitterId: React.Dispatch<React.SetStateAction<string>>;
};
export const AddressReqForm: React.FC<AddressReqFormProp> = memo(
  ({ address, setAddress, setStep, setTwitterId }) => {
    const {
      inputValue,
      address: cAddress,
      handleClick,
      handleChange,
    } = useAddressReqForm({ address, setAddress, setTwitterId });

    return (
      <div className="flex flex-col justify-center gap-y-4 items-center">
        <div className="flex justify-center gap-x-6 items-center">
          <input
            value={inputValue}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="@example"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary" onClick={() => handleClick()}>
            request
          </button>
        </div>
        {cAddress && (
          <div className="flex flex-col items-center">
            <div>
              <a
                href={`https://mumbai.polygonscan.com/address/${cAddress}`}
                className="link link-success"
              >
                address: {cAddress}
              </a>
            </div>
            <div>
              <a
                href={`https://mumbai.polygonscan.com/address/${cAddress}`}
                className="link"
              >
                Visit Polygon Scan
              </a>
            </div>
            <div>
              <button className="btn btn-primary" onClick={() => setStep(2)}>NEXT STEP</button>
            </div>
          </div>
        )}
      </div>
    );
  }
);
