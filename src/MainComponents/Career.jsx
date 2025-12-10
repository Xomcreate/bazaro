import React from 'react';
import { Link } from "react-router-dom";
import { FaLaptopCode, FaChartLine, FaUsers, FaDumbbell, FaGraduationCap, FaRegCheckCircle } from "react-icons/fa";

export default function Career() {
  const mainColor = "text-[#FF4500]"; // Orangered
  const accentBg = "bg-[#FF4500]";
  const textDark = "text-gray-900";
  const jobId = (Math.random() * 10000).toFixed(0).padStart(4, '0');

  // Shared Card Component for Benefits/Perks
  const BenefitCard = ({ Icon, title, description }) => (
    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg flex flex-col items-start h-full transition duration-300 transform hover:shadow-xl">
      <Icon size={30} className={`mb-3 ${mainColor}`} />
      <h3 className={`text-lg font-bold mb-1 ${textDark}`}>{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  // Component for a Single Job Listing
  const JobListing = ({ title, location, type }) => (
    <div className="flex justify-between items-center p-6 border-b border-gray-200 hover:bg-gray-50 transition duration-150 rounded-lg">
      <div>
        <h4 className={`text-xl font-bold mb-1 ${textDark}`}>{title}</h4>
        <p className="text-sm text-gray-500">
          {location} &middot; {type} &middot; ID: {jobId}
        </p>
      </div>
      <Link 
        to={`/apply/${title.toLowerCase().replace(/\s/g, '-')}`}
        className={`px-4 py-2 text-sm font-semibold rounded-full border ${mainColor.replace('text-', 'border-')} hover:bg-red-50 transition duration-150`}
      >
        Apply Now
      </Link>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">
      
      {/* --- 1. Career Hero Banner --- */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        {/* Placeholder for dynamic image/pattern (Focus on people/tech) */}
        <div className="absolute inset-0 opacity-25" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-053366c8b95d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}></div>
        
        <div className="relative text-center max-w-4xl px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Build the Future of <span className={mainColor.replace('text-', '')}>E-commerce</span> with Us
          </h1>
          <p className="text-xl text-gray-200 font-light">
            Join a fast-paced team that values innovation, community, and making a real impact on local businesses globally.
          </p>
        </div>
      </section>

      {/* --- 2. Life at Bazaro (Perks/Benefits) --- */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-12 ${textDark}`}>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <BenefitCard 
              Icon={FaLaptopCode}
              title="Remote Flexibility"
              description="Work where you are most productive. We embrace a hybrid and remote-first culture for most roles."
            />
            <BenefitCard 
              Icon={FaChartLine}
              title="Career Growth Path"
              description="Defined roadmaps and mentorship programs to accelerate your professional development."
            />
            <BenefitCard 
              Icon={FaUsers}
              title="Inclusive Culture"
              description="A diverse team environment where every voice is heard and unique perspectives are celebrated."
            />
            <BenefitCard 
              Icon={FaDumbbell}
              title="Wellness Stipends"
              description="Comprehensive health benefits, gym memberships, and mental health support for all full-time staff."
            />
            <BenefitCard 
              Icon={FaGraduationCap}
              title="Learning Budget"
              description="Annual budget for courses, certifications, and conferences to keep your skills sharp."
            />
            <BenefitCard 
              Icon={FaRegCheckCircle}
              title="Generous PTO"
              description="We encourage you to take time off with flexible paid time off and paid holidays."
            />
          </div>
        </div>
      </section>

      {/* --- 3. Current Job Openings --- */}
      <section className="py-16 bg-white px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-4 ${textDark}`}>
            Explore Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We are actively hiring across multiple teams. Find your next challenge below.
          </p>

          <div className="border border-gray-300 rounded-xl shadow-lg divide-y divide-gray-200 overflow-hidden">
            
            <JobListing 
              title="Senior Frontend Developer (React/Next.js)" 
              location="Remote (Global)" 
              type="Full-Time" 
            />
            <JobListing 
              title="Product Manager, Vendor Experience" 
              location="Lagos, Nigeria" 
              type="Full-Time" 
            />
            <JobListing 
              title="Data Analyst, Supply Chain" 
              location="Hybrid" 
              type="Full-Time" 
            />
            <JobListing 
              title="Customer Support Specialist" 
              location="Remote (EST/GMT)" 
              type="Part-Time" 
            />
            <JobListing 
              title="UX/UI Designer" 
              location="San Francisco, CA" 
              type="Full-Time" 
            />
            
            {/* CTA for more roles */}
            <div className="p-6 text-center bg-gray-50">
              <Link 
                to="/careers/all" 
                className={`text-sm font-semibold ${mainColor} hover:underline`}
              >
                View all 18 open positions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Final CTA/Footer (Vibrant Footer Style) --- */}
      <section className={`py-12 px-4 md:px-12 mt-12 ${accentBg} text-white`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            Don't See Your Role?
          </h2>
          <p className="text-lg font-light text-red-100 mb-6">
            If you have a passion for e-commerce and innovation, we still want to hear from you!
          </p>
          <Link 
            to="/careers/speculative-application" 
            className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Submit Speculative Application
          </Link>
        </div>
      </section>

    </div>
  )
}