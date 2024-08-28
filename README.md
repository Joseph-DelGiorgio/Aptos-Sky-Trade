Key Features

1. Air Rights Parcel Management
Create Air Rights Parcels: Property owners can create parcels of airspace, specifying the cubic footage and price per cubic foot. Each parcel is uniquely identified and tied to the owner’s account.
Transfer Air Rights: Owners can transfer their air rights parcels to another address, enabling trading or gifting of airspace rights.
List and Delist Air Rights: Owners can list their parcels for sale on the marketplace, specifying the price per cubic foot. They can also delist parcels that are no longer for sale.
2. Event-Driven Architecture
The contract emits events for key actions, including parcel creation, transfer, listing, and delisting. These events enable easy tracking of air rights activities on the blockchain, providing transparency and traceability.
3. Robust Error Handling
The contract includes extensive validations and error handling to ensure data integrity and correct state transitions, reducing the risk of bugs or unexpected behavior.
Contract Structure

Modules and Structs
AirRightsParcel: Represents a parcel of airspace, including its ID, owner, cubic footage, price per cubic foot, and listing status.
AirRightsRegistry: A resource holding all air rights parcels for a specific account, along with the next available ID for new parcels.
Event Structs:
AirRightsCreatedEvent: Emitted when a new parcel is created.
AirRightsTransferredEvent: Emitted when a parcel is transferred from one owner to another.
AirRightsListedEvent: Emitted when a parcel is listed for sale.
AirRightsDelistedEvent: Emitted when a parcel is delisted.
Functions
initialize(account: &signer): Initializes the air rights registry for the caller’s account.
create_air_rights(account: &signer, cubic_feet: u64, price_per_cubic_foot: u64): Creates a new air rights parcel for the caller.
transfer_air_rights(from: &signer, to: address, parcel_id: u64): Transfers ownership of an air rights parcel to another address.
list_air_rights(account: &signer, parcel_id: u64, price_per_cubic_foot: u64): Lists a parcel for sale on the marketplace.
delist_air_rights(account: &signer, parcel_id: u64): Delists a parcel, removing it from the marketplace.
Getting Started

Prerequisites
Aptos CLI and framework installed.
An Aptos account to deploy and interact with the contract.
Deployment
Clone the repository and navigate to the project directory.
Deploy the contract using the Aptos CLI:
bash
Copy code
aptos move publish --package-dir path/to/your/package --profile default
Initialize the air rights registry for your account:
bash
Copy code
aptos move run --function-id <your_address>::SkyTrade::air_rights::initialize --profile default
Usage
Create a Parcel:
bash
Copy code
aptos move run --function-id <your_address>::SkyTrade::air_rights::create_air_rights --args <cubic_feet> <price_per_cubic_foot> --profile default
Transfer a Parcel:
bash
Copy code
aptos move run --function-id <your_address>::SkyTrade::air_rights::transfer_air_rights --args <to_address> <parcel_id> --profile default
List a Parcel for Sale:
bash
Copy code
aptos move run --function-id <your_address>::SkyTrade::air_rights::list_air_rights --args <parcel_id> <price_per_cubic_foot> --profile default
Delist a Parcel:
bash
Copy code
aptos move run --function-id <your_address>::SkyTrade::air_rights::delist_air_rights --args <parcel_id> --profile default
Conclusion

The SkyTrade::air_rights smart contract provides a comprehensive solution for managing and trading air rights on the Aptos blockchain. It empowers property owners to unlock the value of their airspace in a decentralized, transparent, and efficient manner.