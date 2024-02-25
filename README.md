# Medical Records Storage DApp

This decentralized application (DApp) allows users to securely store and manage medical records on the blockchain. The application is developed using Hardhat for smart contract development and deployment, and it's deployed on the Polygon Mumbai testnet for testing purposes.

## Features

- Secure storage of medical records on the blockchain.
- Access control mechanisms to ensure only authorized users can view and delete records.
- Integration with Polygon Mumbai testnet for low-cost and fast transactions.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Hardhat installed globally (`npm install -g hardhat`).
- Metamask browser extension installed and configured with a wallet connected to the Polygon Mumbai testnet.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/medical-records-dapp.git

2. Navigate to the project directory:
     ```bash
     cd medical-records-dapp
3. Install dependencies:
    ```bash
    npm install
### Configuration

1. Create a .env file in the project root directory and add your Polygon Mumbai testnet RPC URL and Metamask wallet private key:

- PRIVATE_KEY="Your Metamask Wallet private key"
- API_URL="your alchemy api key"

### Deployment

1. Compile the contracts:

    ```bash
    npx hardhat compile

2. Deploy the contracts to the Polygon Mumbai testnet:

    ```bash
    npx hardhat run scripts/deploy.js --network mumbai

3. Note the deployed contract address logged in the console and add this address in config.json file.

### Usage

1. Start the local development server:

    ```bash
    npm Start

2. Open your web browser and navigate to http://localhost:3000.

3. Connect your Metamask wallet to the application.

4. Use the DApp to store, retrieve, and delete medical records securely on the blockchain.

### Contributing 

- Contributions are welcome! If you have any ideas, enhancements, or bug fixes, feel free to open an issue or submit a pull request.
