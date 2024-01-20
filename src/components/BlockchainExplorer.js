import React, { useState, useEffect } from 'react';

function BlockchainExplorer() {
  // State to store blockchain data
  const [blockchainData, setBlockchainData] = useState([]);

  useEffect(() => {
    // Fetch blockchain data when the component mounts
    const fetchData = async () => {
      try {
        // Make a request to the server to get blockchain data
        const response = await fetch('http://localhost:5000/blockchain');
        const data = await response.json();
        const blocks = data.blocks;

        // Update the state with the fetched blockchain data
        setBlockchainData(blocks);

        // Example: Accessing data from the first transaction of the second block
        const senderPublicKey = blocks[1].transactions[0].receiverPublicKey;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="container mx-auto p-8">
      {/* Map through each block in the blockchain */}
      {blockchainData.map((block, index) => (
        <div
          key={block.blockCount}
          className={`shadow-md rounded-md p-6 mb-8 bg-gray-300 hover:shadow-sm`}
        >
          {/* Display block information */}
          <h2 className={`text-2xl text-center font-bold mb-4 text-${index % 2 === 0 ? 'blue' : 'green'}-800`}>
            Block #{block.blockCount}
          </h2>
          {/* Display forger, last hash, signature, and timestamp */}
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Forger:
            </span>{' '}
            {block.forger}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Last Hash:
            </span>{' '}
            {block.lastHash}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Signature:
            </span>{' '}
            {block.signature}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Timestamp:
            </span>{' '}
            {block.timestamp}
          </div>
          {/* Display transactions in the block */}
          {block.transactions.length > 0 ? (
            <div>
              <h3 className={`text-xl font-bold mb-4 text-${index % 2 === 0 ? 'blue' : 'green'}-800`}>
                Transactions
              </h3>
              {/* Map through each transaction in the block */}
              {block.transactions.map((transaction) => (
                <div key={transaction.id} className="bg-gray-100 p-4 mb-4 rounded-md">
                  {/* Display transaction details */}
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Amount:
                    </span>{' '}
                    {transaction.amount}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      ID:
                    </span>{' '}
                    {transaction.id}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Receiver Public Key:
                    </span>{' '}
                    {transaction.receiverPublicKey}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Sender Public Key:
                    </span>{' '}
                    {transaction.senderPublicKey}
                  </p>
                  {/* Add more elements to display other transaction data as needed */}
                </div>
              ))}
            </div>
          ) : (
            <p>No transactions in this block</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default BlockchainExplorer;
