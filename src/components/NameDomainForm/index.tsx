import { memo, } from "react";
import { makeNameDomainContract } from "../../utils/nameDomain";

type NameDomainFormProp = {
  address: string;
  twitterId: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export const NameDomainForm: React.FC<NameDomainFormProp> = memo(
  ({ address, twitterId, setStep }) => {
    
    const domain = `${twitterId}.twl`;
    const handleClick = async()=> {
        const {contract, web3} = makeNameDomainContract();
        const fee = await contract.methods.price(domain).call();
        console.log(fee);
        const myAddress = await web3.eth.getAccounts();
        console.log(myAddress);
        //TODO: polygon gas station
        await contract.methods.register(domain).send({from: myAddress[0], value: fee, maxPriorityFeePerGas: web3.utils.toWei('3', 'gwei'), maxFeePerGas: web3.utils.toWei('3', 'gwei')});
        setStep(3);
        return 'resolved';
    }

    return (
      <div className="flex flex-col justify-center gap-y-4 items-center">
        <div className="flex justify-center gap-x-6 items-center">
          <div className="text-accent text-xl underline">{domain}</div>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Register Your Domain
          </button>
        </div>
      </div>
    );
  }
);
