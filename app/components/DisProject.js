const DisProject = ()=>{
    return(
        <div className="container mx-auto px-4 py-8 bg-gray-300 w-screen gradient-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-4 md:pl-4 pl-0 text-white">Lets discuss your project</h1>
            <p className="text-gray-700 md:pl-4 pl-0 text-white">
            Let&apos;s figure out how to create an effective application,
            its cost and terms of its development
            </p>
          </div>
  
          {/* Right Section */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:ml-6  md:max-w-[676px] pt-8 pb-2 pl-4 pr-4 mt-8 ">
        <div className="px-6 py-4">
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
      </div>
  
    )
}
export default DisProject;