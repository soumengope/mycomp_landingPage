import Image from "next/image";

const Ourteam = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white p-8 md:p-24">
      <div className="md:w-1/2 w-full p-4">
        <h1 className="text-2xl font-bold mb-4">Our team</h1>
        <p className="text-lg">
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web, and mobile development.
        </p>

        <div className="flex flex-row mt-12 justify-start gap-6">
          <div>
            <h4 className="text-lg font-bold">28</h4>
            <p className="text-gray-700 mt-4">Team members</p>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">+100</h4>
            <p className="text-gray-700 mt-4">Projects</p>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">7 years</h4>
            <p className="text-gray-700 mt-4">In IT sphere</p>
          </div>
        </div>
        <p className="text-lg pt-12">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It's expensive
          but worth it.
        </p>
      </div>
      <div className="md:w-1/2 w-full p-4 flex justify-center items-center">
        <Image
          src="/our_team.png"
          width={300}
          height={200}
          alt="our team Image"
          className="w-full h-auto shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Ourteam;
