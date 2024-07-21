// pages/index.js
import Image from 'next/image';

const DevProjects = () => {
  return (
    <div className="container bg-white mx-auto px-4 py-8 mt-24">
      <header className="mb-8 text-left md:ml-20 ml-4 md:max-w-[676px]">
        <h1 className="text-2xl font-bold">
          Developed more than <span className="text-green-600">100</span> projects in 
          <span className="text-green-600"> 15 </span> industries
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:pl-12 md:pl-12">
        <div className="p-4">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <Image src="/frm1.png" alt="Logo 1" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm2.png" alt="Logo 2" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm3.png" alt="Logo 3" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm4.png" alt="Logo 4" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm5.png" alt="Logo 5" className="w-auto h-auto" width={300} height={100}/>
            </li>
          </ul>
        </div>

        <div className="p-4 ">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <Image src="/frm6.png" alt="Logo 6" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm7.png" alt="Logo 7" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm8.png" alt="Logo 8" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm9.png" alt="Logo 9" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm10.png" alt="Logo 10" className="w-auto h-auto" width={300} height={100}/>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <Image src="/frm11.png" alt="Logo 11" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm12.png" alt="Logo 12" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm13.png" alt="Logo 13" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm14.png" alt="Logo 14" className="w-auto h-auto" width={300} height={100}/>
            </li>
            <li className="flex items-center">
              <Image src="/frm15.png" alt="Logo 15" className="w-auto h-auto" width={300} height={100}/>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-2 pb-2 w-full mt-20">
        {/* Left Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pl-20 pl-0">
          <h1 className="text-2xl font-bold mb-4">Projects we are proud of</h1>
          <p className="text-gray-700">
            Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership.
          </p>

          <h1 className="text-2xl font-bold mb-4 mt-12">Project 1</h1>
          <p className="text-gray-700 mt-8">
            Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
          </p>
          <p className="text-gray-700 mt-8">
            Business analysis / iOS / Android / QA / UI/UX Design
          </p>

          <div className="flex flex-row gap-4 mt-12">
            <div>
              <Image src="/frm16.png" alt="india image" width={100} height={50}/>
            </div>
            <div>
              <Image src="/frm17.png" alt="real state image" width={150} height={60}/>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-12">
            <div>
              <h4 className="text-lg font-bold">400%</h4>
              <p className="text-gray-700 mt-4">User growth</p>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">+200 000</h4>
              <p className="text-gray-700 mt-4">Active users</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 mt-12">
            <div>
              <Image src="/ios.png" alt="ios image" width={200} height={100}/>
            </div>
            <div>
              <Image src="/google_play.png" alt="google play image" width={180} height={40}/>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:pl-32 pl-0 relative">
          <ul className="space-y-4">
            <Image src="/project_mob.png" alt="mobile phone pic" className="w-auto h-auto relative md:absolute md:bottom-8" width={300} height={100}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevProjects;
