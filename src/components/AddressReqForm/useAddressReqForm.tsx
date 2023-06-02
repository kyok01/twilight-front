import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { contractMaker } from "../../hooks/useProvider";

export const useAddressReqForm = () => {
    useEffect(()=>{
        const {contract} = contractMaker();
        setContract(contract);
    },[])

    const [inputValue, setInputValue] = useState<string>('');
    const [address, setAddress] = useState('')
    const [contract, setContract] = useState<any>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleClick = useCallback(async() => {
    const address = await contract.methods.getAddress('0xa4E1040705Cb9434D97A295079fe0442eE571456', inputValue).call();
    console.log(address);
    setAddress(address);
  },[])

  return {inputValue, setInputValue, address, setAddress, handleClick, handleChange}
}