import HomeScreenImg from "../assets/HomeScreenImg.png";

const HomeDiv = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex-1 flex items-center justify-center bg-sky-300 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-4xl mt-4 sm:mt-8 md:mt-12 lg:mt-18 mb-4 sm:mb-8 md:mb-12 lg:mb-18 ml-4 sm:ml-8 md:ml-20 lg:ml-50 mr-4 sm:mr-8 md:mr-20 lg:mr-50"
        style={{ backgroundImage: `url(${HomeScreenImg})` }}
      >
        <div className="relative container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="hidden lg:block"></div>

          <div className="text-white font-chewy p-4 sm:p-6 md:p-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              "Forest Jellies"
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              COLLECTION
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              OUT NOW
            </h1>
            <button className="mt-4 sm:mt-5 md:mt-6 inline-block bg-white hover:bg-white text-pink-400 font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
