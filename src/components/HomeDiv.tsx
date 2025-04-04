import HomeScreenImg from "../assets/HomeScreenImg.png";

const HomeDiv = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex-1 flex items-center justify-center bg-sky-300 px-4 sm:px-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg mt-4 sm:mt-18 mb-4 sm:mb-18 ml-4 sm:ml-50 mr-4 sm:mr-50"
        style={{ backgroundImage: `url(${HomeScreenImg})` }}
      >
        <div className="relative container mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="hidden md:block"></div>

          <div className="text-white text-center md:text-left font-chewy p-4 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              "Forest Jellies"
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              COLLECTION
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              OUT NOW
            </h1>
            <button className="mt-6 inline-block bg-white text-pink-400 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
