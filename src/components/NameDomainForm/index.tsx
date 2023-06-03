import { ChangeEvent, memo, useCallback, useState } from "react";

type NameDomainFormProp = {
  address: string;
  setTokenId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export const NameDomainForm: React.FC<NameDomainFormProp> = memo(
  ({ address, setTokenId, setStep }) => {
    const handleClick = ()=> {
        alert('aaa');
    }

    return (
      <div className="flex flex-col justify-center gap-y-4 items-center">
        <div className="flex justify-center gap-x-6 items-center">
          <div></div>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Register Your Domain
          </button>
        </div>
      </div>
    );
  }
);
