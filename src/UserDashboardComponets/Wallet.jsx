import React from 'react';

// Assuming you've configured 'orangered' in your tailwind.config.js
// Custom color variables for cleaner use:
const orangeredBg = 'bg-[#FF4500] hover:bg-[#E63E00]';
const orangeredText = 'text-[#FF4500]';

function Wallet() {
  // Mock Data
  const currentBalance = 150.75;
  const pendingFunds = 25.50;
  
  const transactions = [
    { id: 1001, type: 'Credit', description: 'Sale: Order #12345', amount: 45.00, date: '2025-12-10', status: 'Completed' },
    { id: 1002, type: 'Debit', description: 'Withdrawal to Bank', amount: 50.00, date: '2025-12-09', status: 'Processing' },
    { id: 1003, type: 'Credit', description: 'Deposit via Card', amount: 100.00, date: '2025-12-08', status: 'Completed' },
    { id: 1004, type: 'Debit', description: 'Purchase: Item XYZ', amount: 15.25, date: '2025-12-07', status: 'Completed' },
    { id: 1005, type: 'Credit', description: 'Refund: Order #9876', amount: 10.50, date: '2025-12-06', status: 'Completed' },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">
            My Wallet
          </h1>
          <p className="text-lg text-gray-600">
            Manage your funds, deposits, withdrawals, and transaction history.
          </p>
        </header>

        {/* Balance Overview & Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Main Balance Card (Primary Orangered Focus) */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-2xl p-6 sm:p-8 border-t-8 border-[#FF4500]">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Available Balance
            </h3>
            <div className="flex items-end justify-between">
                <p className="text-6xl font-black text-black leading-none">
                    ${currentBalance.toFixed(2)}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button 
                        className={`py-3 px-6 text-white font-semibold rounded-lg transition duration-200 ease-in-out ${orangeredBg} shadow-md`}
                    >
                        Deposit
                    </button>
                    <button 
                        className="py-3 px-6 bg-white border border-[#FF4500] text-[#FF4500] font-semibold rounded-lg transition duration-200 ease-in-out hover:bg-gray-50"
                    >
                        Withdraw
                    </button>
                </div>
            </div>
          </div>
          
          {/* Pending Funds Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Pending Funds
            </h3>
            <p className={`text-4xl font-bold ${orangeredText}`}>
              ${pendingFunds.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Awaiting clearance from recent sales.
            </p>
          </div>
        </section>

        {/* Transaction History */}
        <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-black mb-6">
            Transaction History
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tx.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                      {tx.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`font-semibold ${tx.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                          {tx.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-bold ${tx.type === 'Credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.type === 'Credit' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(tx.status)}`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer/Pagination */}
          <div className="mt-6 text-center border-t pt-4">
              <button 
                  className={`text-sm font-semibold p-2 rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 ${orangeredText}`}
              >
                  Load More Transactions &rarr;
              </button>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Wallet;