import HomeScreenImg from "../assets/HomeScreenImg.png";

const HomeDiv = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex-1 flex items-center justify-center bg-sky-300 px-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg mt-18 mb-18 ml-25 mr-25"
        style={{ backgroundImage: `url(${HomeScreenImg})` }}
      >
        <div className="w-full max-w-4xl text-white text-left font-chewy">
          <h1 className="text-5xl sm:text-6xl font-bold">
            "Forest Jellies" COLLECTION OUT NOW
          </h1>
          <button className="mt-6 inline-block bg-white hover:bg-white text-pink-400 font-semibold py-3 px-6 rounded-lg cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
