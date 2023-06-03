import { ChangeEvent, useState } from "react";
import { makeAccountFactoryContract } from "../../utils/accountFactory";

type UseAddressReqFormParams = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setTwitterId: React.Dispatch<React.SetStateAction<string>>;
}

export const useAddressReqForm = ({address, setAddress, setTwitterId}: UseAddressReqFormParams) => {

    const [inputValue, setInputValue] = useState<string>('');
    console.log(inputValue);
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
    setInputValue(e.target.value)
  }

  const handleClick = async() => {
    const {contract} = makeAccountFactoryContract();
    console.log(inputValue);
    const address = await contract.methods.getAddress('0xa4E1040705Cb9434D97A295079fe0442eE571456', inputValue).call();
    console.log(inputValue);
    setTwitterId(inputValue)
    console.log(address);
    setAddress(address);
    return 'resolved';
  }

  return {inputValue, setInputValue, address, setAddress, handleClick, handleChange}
}