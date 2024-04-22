## Degen Base 1000x Subgraph

This repository contains the subgraph for the Degen Base 1000x decentralized exchange (DEX). This subgraph allows developers to query on-chain data from Degen Base 1000x smart contracts using The Graph protocol.

### Getting Started

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.
* Basic understanding of The Graph and GraphQL queries.

**Clone the Repository:**

```bash
git clone https://github.com/Degen-Base/1000x-Graph
```

**Install Dependencies:**

```bash
cd degen-base-1000x-subgraph
npm install
```

**Deploy the Subgraph:**

1.  **Create a Graph Node account:** [https://thegraph.com/docs/en/quick-start/](https://thegraph.com/docs/en/quick-start/)
2.  **Obtain the subgraph manifest:**

```bash
npm run subgraph manifest
```

Copy the generated subgraph manifest (typically named `subgraph.yaml`).

3.  **Deploy the subgraph to The Graph network of your choice:**

* **Mainnet:** Use the Graph Node CLI tool and follow the instructions: [https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/](https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/)
* **Testnet:** Follow the instructions for deploying to a testnet network on The Graph website.

**Querying the Subgraph:**

Once deployed, you can use tools like [https://thegraph.com/docs/en/network/explorer/](https://thegraph.com/docs/en/network/explorer/) to explore the schema and write GraphQL queries to retrieve data from Degen Base 1000x smart contracts.

**Note:** Replace `your-username` with your actual Github username in the cloning command.


### Subgraph Schema

The schema.graphql file defines the data model exposed by the subgraph. It specifies the entities (e.g., pools, tokens, swaps) and their relationships, along with the fields (properties) that can be queried.

### Contributing

We welcome contributions to this subgraph! If you find a bug or have a feature suggestion, please create an issue on this repository.

### License

This subgraph is licensed under the MIT License. See the LICENSE file for details.
