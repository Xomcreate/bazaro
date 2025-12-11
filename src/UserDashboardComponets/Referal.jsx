import React, { useState } from 'react';

// Custom color variables for cleaner use:
const orangeredBg = 'bg-[#FF4500] hover:bg-[#E63E00]';
const orangeredText = 'text-[#FF4500]';
const copyButtonBg = 'bg-gray-700 hover:bg-black';

function Referal() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://yourmarketplace.com/r/USER12345";
  
  const referralSteps = [
    { number: 1, title: 'Share Your Link', description: 'Send your unique link to friends, family, and social networks.' },
    { number: 2, title: 'Friend Signs Up & Shops', description: 'They must complete their first purchase of $50 or more.' },
    { number: 3, title: 'Earn Your Reward', description: 'Once their order is confirmed, you both receive $10 Wallet Credit!' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-black">
            Refer & Earn Rewards!
          </h1>
          <p className="text-xl text-gray-600">
            Give your friends $10 off, and get $10 for yourself.
          </p>
        </header>

        {/* Incentive Banner (Orangered Focus) */}
        <section className={`bg-white border-2 border-[#FF4500] rounded-xl shadow-2xl p-6 sm:p-8 text-center mb-10`}>
          <p className={`text-5xl font-extrabold mb-1 ${orangeredText}`}>
            GET $10
          </p>
          <p className="text-xl font-semibold text-black">
            for every friend who completes their first order!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Max out at 10 successful referrals ($100 total bonus).
          </p>
        </section>

        {/* Referral Link and Sharing Section */}
        <section className="bg-gray-50 p-6 rounded-xl shadow-inner mb-10">
            <h2 className="text-xl font-bold text-black mb-4">
                Your Unique Referral Link
            </h2>
            
            {/* Link Box */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
                <input
                    type="text"
                    readOnly
                    value={referralLink}
                    className="grow p-3 border border-gray-300 bg-white rounded-lg text-sm text-gray-800 truncate"
                />
                <button
                    onClick={handleCopy}
                    className={`shrink-0 py-3 px-6 text-white font-semibold rounded-lg transition duration-200 ease-in-out ${copyButtonBg}`}
                >
                    {copied ? '✅ Copied!' : 'Copy Link'}
                </button>
            </div>
            
            {/* Quick Share Buttons */}
            <div className="flex justify-center space-x-4">
                <button className={`flex items-center justify-center p-3 rounded-full text-white font-semibold shadow-md transition duration-200 bg-blue-600 hover:bg-blue-700`}>
                    Share on Facebook
                </button>
                <button className={`flex items-center justify-center p-3 rounded-full text-white font-semibold shadow-md transition duration-200 bg-blue-400 hover:bg-blue-500`}>
                    Share on X (Twitter)
                </button>
                <button className={`flex items-center justify-center p-3 rounded-full text-white font-semibold shadow-md transition duration-200 bg-green-600 hover:bg-green-700`}>
                    Share via WhatsApp
                </button>
            </div>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How The Referral Program Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {referralSteps.map((step) => (
              <div key={step.number} className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-gray-200 hover:border-t-4 hover:border-[#FF4500] transition duration-300">
                <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-2xl font-bold text-white ${orangeredBg}`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Footer Link */}
        <div className="mt-10 text-center text-sm text-gray-500">
            <a href="#" className={`font-semibold underline ${orangeredText}`}>
                Read Full Terms & Conditions
            </a>
        </div>
        
      </div>
    </div>
  );
}

export default Referal;