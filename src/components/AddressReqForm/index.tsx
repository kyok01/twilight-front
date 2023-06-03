import { ChangeEvent, memo, useCallback, useState } from "react"
import { useAddressReqForm } from "./useAddressReqForm"

export const AddressReqForm = memo(()=> {
  const {inputValue, setInputValue, address, setAddress, handleClick, handleChange} = useAddressReqForm();
  
  return (
    <div className="flex flex-col justify-center gap-y-4 items-center">
    <div className="flex justify-center gap-x-6 items-center">
    <input value={inputValue} onChange={e => handleChange(e)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
    <button className="btn btn-primary" onClick={()=>handleClick()}>request</button>
    </div>
    {address && <div className="flex flex-col items-center"><div><a href={`https://mumbai.polygonscan.com/address/${address}`} className="link link-success">address: {address}</a></div><div><a href={`https://mumbai.polygonscan.com/address/${address}`} className="link">Visit Polygon Scan</a></div></div>}
    </div>
  )
})