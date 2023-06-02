import { ChangeEvent, memo, useCallback, useState } from "react"
import { useAddressReqForm } from "./useAddressReqForm"

export const AddressReqForm = memo(()=> {
  const {inputValue, setInputValue, address, setAddress, handleClick, handleChange} = useAddressReqForm();
  
  return (
    <div className="flex flex-col justify-center items-center">
    <input value={inputValue} onChange={e => handleChange(e)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
    <button className="btn btn-primary" onClick={()=>handleClick()}>request</button>
    {address && <div><a href={`https://mumbai.polygonscan.com/address/${address}`}>address: {address}</a></div>}
    </div>
  )
})