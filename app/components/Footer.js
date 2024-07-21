import Image from "next/image";

const Footer = () => {
  return (
    <div className="min-w-screen md:w-10/12 w-11/12 mx-auto rounded-lg justify-center flex flex-col items-center p-4 pb-12 pt-12 mb-12 mt-12 bg-black text-white">
      {/* Logo */}
      <div className="w-full flex justify-center mb-8">
        <Image
          src="/footer_logo.png"
          width={200}
          height={100}
          alt="Top Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Items Container */}
      <div className="w-full flex md:flex-row lg:flex-row flex-col items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center md:pb-0 pb-8">
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/phone_logo.png"
              width={25}
              height={25}
              alt="phone logo"
              className="w-12 h-12 mb-2"
            />
            <h2 className="text-sm text-center">Contact nums</h2>
          </div>
          <p className="text-center">+91 7319047005</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:pb-0 pb-8">
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/gmail_logo.png"
              width={25}
              height={25}
              alt="email logo"
              className="w-12 h-12 mb-2"
            />
            <h2 className="text-sm text-center">Email</h2>
          </div>
          <p className="text-center">soumengop@gmail.com</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:pb-0 pb-8">
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/address_logo.png"
              width={25}
              height={25}
              alt="address logo"
              className="w-12 h-12 mb-2"
            />
            <h2 className="text-sm text-center">Address</h2>
          </div>
          <p className="text-center">West Bengal, India</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:pb-0 pb-8">
          <div className="flex flex-col items-center mb-2">
            <Image
              src="/note_logo.png"
              width={25}
              height={25}
              alt="request logo"
              className="w-12 h-12 mb-2"
            />
            <h2 className="text-sm text-center">Leave a request</h2>
          </div>
          <p className="text-center">Leave a request</p>
        </div>
      </div>
      <div className="pt-4 md:pt-12 text-xs text-center">
        <p>We work throughout the world</p>
      </div>
    </div>
  );
};

export default Footer;
