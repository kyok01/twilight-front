import { ChangeEvent, useState } from "react"
import { useProvider } from "../hooks/useProvider"

export function AddressReqForm() {
  const {contract} = useProvider();
    const [inputValue, setInputValue] = useState<string>('');
    const [address, setAddress] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  // console.log(inputValue);
  
  const handleClick = async() => {
    const address = await contract.methods.getAddress('0xa4E1040705Cb9434D97A295079fe0442eE571456', inputValue).call();
    console.log(address);
    setAddress(address);
  }
  

  return (
    <div className="flex flex-col justify-center items-center">
    <input value={inputValue} onChange={e => handleChange(e)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
    <button className="btn btn-primary" onClick={()=>handleClick()}>request</button>
    {address && <div><a href={`https://mumbai.polygonscan.com/address/${address}`}>address: {address}</a></div>}
    </div>
  )
}