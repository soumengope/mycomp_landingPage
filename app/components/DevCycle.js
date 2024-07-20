import React from 'react';

const DevCycle = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 w-screen mt-4">
      {/* Left Section */}
      <div className="md:w-full mb-6 md:mb-0 md:pl-32 pl-4">
        <h1 className="text-2xl font-bold mb-4">Full Development Cycle</h1>
        <p className="text-gray-700">We use proven technologies</p>

        <h1 className="text-lg font-bold mt-4 mb-4">Web</h1>
        <p className="text-gray-700">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>

        <h1 className="text-lg font-bold mt-4 mb-4">Mobile</h1>
        <p className="text-gray-700">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
      </div>

      {/* Right Section */}
      <div className="md:w-full md:pl-32 pl-4">
        <ul className="space-y-4">
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> iOS Development</span> <span className="ml-2">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
           <span className='hover:underline'> Android Development</span> <span className="ml-2">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> Web Development</span> <span className="ml-2 ">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> UI/UX Design</span> <span className="ml-2 ">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> Testing</span> <span className="ml-2 ">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> Launch</span> <span className="ml-2 ">→</span>
          </li>
          <li className="flex items-center hover:no-underline cursor-pointer">
            <span className='hover:underline'> IT Consulting</span> <span className="ml-2 ">→</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DevCycle;
