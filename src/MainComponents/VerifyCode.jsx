import React, { useState } from 'react';

// Utility component for the individual code inputs
const CodeInput = ({ value, onChange, index }) => (
    <input
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        id={`code-input-${index}`}
        // Black border, centered text, focus ring in orangered
        className="w-12 h-14 sm:w-14 sm:h-16 text-center text-3xl font-bold 
                   border border-black rounded-lg shadow-sm text-black
                   focus:border-red-600 focus:ring-1 focus:ring-red-600 transition duration-150"
        style={{ caretColor: 'transparent' }} // Hides the blinking cursor for single-character input feel
        onKeyDown={(e) => {
             // Logic to move focus backward when deleting
            if (e.key === 'Backspace' && !value && index > 0) {
                document.getElementById(`code-input-${index - 1}`).focus();
            }
        }}
    />
);


function VerifyCode() {
    const CODE_LENGTH = 6;
    const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));

    const handleCodeChange = (inputValue, index) => {
        // Only take the first character if pasting
        const char = inputValue.slice(0, 1);
        
        const newCode = [...code];
        newCode[index] = char.toUpperCase(); // Ensure uppercase if needed

        // Auto-focus to the next input
        if (char && index < CODE_LENGTH - 1) {
            document.getElementById(`code-input-${index + 1}`).focus();
        }
        
        setCode(newCode);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        const fullCode = code.join('');
        
        if (fullCode.length === CODE_LENGTH) {
            // Simulate API verification call
            console.log(`Verifying code: ${fullCode}`);
            alert('Code submitted! Proceeding to reset password...');
            // In a real app, you would redirect the user here
        } else {
            alert(`Please enter the full ${CODE_LENGTH}-digit code.`);
        }
    };

    const handleResend = () => {
        alert('Resending code...');
        // In a real app, trigger API call to resend code
    };

    return (
        // Main container: Centered content on a light background
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            
            {/* Verification Card */}
            <div className="w-full max-w-lg p-8 space-y-8 bg-white shadow-xl rounded-2xl border border-gray-200 text-black">
                
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-black">
                        Verify Code
                    </h2>
                    <p className="mt-2 text-md text-gray-700">
                        A **{CODE_LENGTH}-digit** verification code has been sent to your email.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleVerify}>
                    
                    {/* Code Input Group */}
                    <div className="flex justify-center space-x-3 sm:space-x-4 mb-6">
                        {code.map((digit, index) => (
                             <CodeInput
                                key={index}
                                index={index}
                                value={digit}
                                onChange={handleCodeChange}
                            />
                        ))}
                    </div>

                    <div>
                        {/* Primary Button in Orangered */}
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg 
                                       text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                        >
                            Verify and Proceed
                        </button>
                    </div>
                </form>
                
                {/* Footer and Resend Link */}
                <div className="text-sm text-center space-y-2">
                    <p className="text-gray-600">
                        Didn't receive the code?
                    </p>
                    {/* Resend link in Orangered */}
                    <button
                        onClick={handleResend}
                        className="font-medium text-red-600 hover:text-red-700 focus:outline-none"
                    >
                        Resend Code
                    </button>
                    <div className="pt-2 border-t border-gray-100 mt-4">
                        <a
                            href="/login"
                            className="text-sm text-gray-500 hover:text-black"
                        >
                            Cancel and Go Back to Sign In
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default VerifyCode;