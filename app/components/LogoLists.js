import Image from 'next/image';

const LogoLists = () => {
  const imageSrc = '/logo_bar.png';

  return (
    <div className="sm:border-t border-slate-400 sm:border-b py-4">
      <div className="flex flex-wrap sm:flex-nowrap sm:flex-row justify-evenly">
        {Array(6).fill(imageSrc).map((src, index) => (
          <div
            key={index}
            className="w-full sm:w-1/6 flex justify-center mb-4 sm:mb-0"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLists;
