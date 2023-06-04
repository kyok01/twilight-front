![logo](docs/PPWallet.png)

# PPwallet - Account Abstraction Wallet to realize permissonless Payment

## Summary
PPWallet will onboard next 400 million people.
We enable crypto-users to pay non-wallet holder token.
We prepared Name Server as a gift towards non-crypto users.


Presentatitoon  movie:
youtube:

Only demo(movie):
https://www.loom.com/share/f8f86d68c06d4b2fbbf0b0399d09e689 



## Problem

Overall Issue: Existing crypto transactions are limited to wallet holders 
such as those with Metamask.

For Token Sender: 
To distribute tokens to your friends, you need to ask for their wallet addresses
,as their accounts are not linked to their wallet addresses.

For token receiver
There is not enough incentive to start crypto.
It is so difficult to start crypto for non-wallet 
holders, as they have to set up meatamask, to get token from CEX.

## Solution
User can send token to non-wallet holder ,without knowing friend's wallet
address or ens address.

User can start crypto just pushing login button, getting access right of the token inside.
user don't have to manage private keys.

### Architecture

Using create2( ERC 1014), Token Sender can find out which address will be deployed for the receiver.
The token Receiver will know the token was sent to his/her wallet, by the twitter notification.
The sender can send Name Service (ERC 721 that has resolver & record function ) as a gift.
The Receiver will push claim token button & deploy his/her contract wallet(ERC4337)



### Unique Point

PPwallet is unique as non-wallet holder can use this service.
And we prepared Name Server NFT as a gift, this kind of onboarding way is unique as well.


## User Flow

１. Search friend's Twitter ID, then know the address to send.
２. Send tip to the address.
３. Push gift button (optional)
４. Receiver knows the token was sent via Twitter.
５. Receiver will claim token ,deploying the contract wallet.
(the gas fee was paid by us ,so user can start crypto without knowing about deployment.)

## Future Work
１. Improve the retention mechanism to allow for a share tweet with a mention to 
the target Twitter account when a token is sent.
２. Development of distribution support tools. Provide a system that makes it easy
 to manage Twitter followers and send to many users at once when distributing NFTs. This can be used in collaborations with companies.
３.Integration with DEX and NFT marketplaces, etc.


## TechStack

| Title | Usage |
| --- | --- |
| Account Abstraction |  To deploy contract wallet, providing users with a no-cost gas experience |
| create2 | To know which address should be deployed |
| NFT |  To implement a campaign to Giveaway safer and more secure NFTs through consensus on the use of OnSnap. |


## Deployed contract

### Polygon

| contract | contract address |
| --- | --- |
| Name Service (NNS)| 0x5d9b258Dc16dB1aEf7250cBb9dBc8A47420CA484 |
|PPAccountFactory|https://mumbai.polygonscan.com/address/0x5d9b258Dc16dB1aEf7250cBb9dBc8A47420CA484#code
## Others

### The repo of Generative AI NFT
https://github.com/kyok01/twilight-front/tree/master　