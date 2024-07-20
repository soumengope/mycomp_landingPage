import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Store Contents */}
          <div className="w-full md:w-1/2 p-0 mt-32 md:pl-28 pl-0">
            <h1 className="text-2xl font-bold mb-4 max-w-[600px] pl-4">
            <span className="text-yellow-400">User-Centric Excellence</span>: Our App Development services Tackles Your Pain Points
            </h1>
            <p className="pl-4 p-4">Experience a Seamless Digital Journey with Desun - Where Every Line of Code Resolves Your Challenges and 
              <span className="text-yellow-400"> Elevates Your App Experience</span> to Unparalleled Heights.</p>

          {/* Left Section: Card */}
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:ml-6  md:max-w-[676px] pt-8 pb-2 mt-8 ">
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-8">Leave your contacts and we will call you back within 30 minutes</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-gray-700 text-sm font-bold mb-2">Full Name</div>
              <div className="text-gray-700 mb-4">Soumen Gope</div>
              <div className="text-gray-700 text-sm font-bold mb-2 pt-6">Phone Number</div>
              <div className="text-gray-700 mb-4">+91 7319047005</div>
            </div>
            <div>
              <div className="text-gray-700 text-sm font-bold mb-2">Business Name</div>
              <div className="text-gray-700 mb-4">ABC Technology PVT LTD</div>
              <div className="text-gray-700 text-sm font-bold mb-2 pt-6">Business Email</div>
              <div className="text-gray-700 mb-4">soumengop@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Get Consultation
            </button>
          </div>
        </div>
        </div>
        </div>
          

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2 p-0 hidden md:block">
            <Image
              src="/mobiles_grp.png"
              alt="mobile phones"
              width={800}
              height={800}
            />
          </div>
        </div>
  );
}

export default Card;
