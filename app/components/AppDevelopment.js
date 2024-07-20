// pages/index.js
import Image from 'next/image';

const AppDevelopment = ()=>{
  return (
    <div>
     <header className="mb-8 text-left md:ml-28 ml-4 mt-16">
        <h1 className="text-2xl font-bold">
          Application Development Stages</h1>
      </header>
      <div className="flex flex-col md:flex-row p-4 md:p-28">
        {/* First Section */}
        <section className="flex-1 flex flex-col gap-4">
          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/analysis.png" alt="Logo 1" width={150} height={50}/>
              </div>
              <p className="text-gray-600">We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
            </div>
          </div>

          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/design.png" alt="Logo 2" width={130} height={50} />
              </div>
              <p className="text-gray-600">We adapt the customer&apos;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
            </div>
          </div>

          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/development.png" alt="Logo 3" width={150} height={50} />
              </div>
              <p className="text-gray-600">We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
            </div>
          </div>
        </section>

        {/* Middle Section */}
        <section className="flex-1 flex justify-center items-center p-4">
          <Image src="/app_dev.png" alt="Middle Image" width={300} height={300} className="object-cover" />
        </section>

        {/* Third Section */}
        <section className="flex-1 flex flex-col gap-4">
          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/testing.png" alt="Logo 4" width={150} height={50} />
              </div>
              <p className="text-gray-600">We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions</p>
            </div>
          </div>
          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/launch.png" alt="Logo 5" width={150} height={50} />
              </div>
              <p className="text-gray-600">We design the application page and publish it in the App Store and Google Play stores.
              </p>
            </div>
          </div>
          <div className="border p-4">
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <Image src="/support.png" alt="Logo 6" width={150} height={50} />
              </div>
              <p className="text-gray-600">We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AppDevelopment;
