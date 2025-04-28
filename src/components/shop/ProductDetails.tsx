import { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";
import Button from "../ui/Button";
import { CardContainer } from "../ui/CardContainer";

const ProductDetails = () => {
  const { product } = useProduct();
  const [asteroids, setAsteroids] = useState<
    {
      id: number;
      top: string;
      size: string;
      speed: number;
      glow: string;
    }[]
  >([]);

  useEffect(() => {
    // Create initial asteroids immediately
    const createAsteroid = () => ({
      id: Date.now() + Math.random(),
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 15}px`, // Bigger size (15-35px)
      speed: Math.random() * 2 + 3, // Faster speed (3-5s)
      glow: `${Math.random() * 8 + 4}px`, // Stronger glow (4-12px)
    });

    // Initial burst of 5 asteroids
    setAsteroids(Array.from({ length: 5 }, createAsteroid));

    // Continuous asteroid creation
    const interval = setInterval(() => {
      setAsteroids((prev) => [...prev.slice(-15), createAsteroid()]);
    }, 500); // New asteroid every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <CardContainer width={7} className="p-0 m-0 relative overflow-hidden">
      <style>{`
        @keyframes asteroidFly {
          0% { transform: translateX(-100px) scale(0.8); opacity: 0; }
          10% { opacity: 1; transform: translateX(-50px) scale(1); }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) scale(1.2); opacity: 0; }
        }
      `}</style>

      {/* Asteroid elements */}
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className="absolute rounded-full bg-sky-300 z-0"
          style={{
            top: asteroid.top,
            left: "0px",
            width: asteroid.size,
            height: asteroid.size,
            animation: `asteroidFly ${asteroid.speed}s linear forwards`,
            filter: `drop-shadow(0 0 ${asteroid.glow}px rgba(125, 211, 252, 0.9))`,
            opacity: 0,
            willChange: "transform, opacity",
          }}
        />
      ))}

      <div className="flex flex-col lg:flex-row lg:gap-15 sm:p-6 min-h-[500px] relative z-10">
        {/* Content remains unchanged */}
        <div className="lg:order-1 lg:w-1/2 flex items-center justify-center">
          <div className="font-chewy text-pink-400 text-center">
            <h1 className="text-2xl md:text-4xl">{product?.name}</h1>

            <div className="flex justify-center items-center">
              <img
                src={product?.image}
                alt={product?.name}
                className="max-h-100 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="lg:order-2 lg:w-1/2 rounded-lg flex flex-col lg:flex-row p-3 lg:p-10">
          <div className="flex flex-col justify-center items-center">
            <p className="order-2 lg:order-1 space-y-2 font-chewy text-bold text-white text-center text-lg md:text-2xl bg-[linear-gradient(160deg,rgba(238,130,207,0.74)_0%,rgb(177,124,247)_100%)] p-8 rounded-lg shadow-md">
              {product?.description}
            </p>
            <p className="lg:pt-7 lg:order-2 font-chewy text-pink-400 text-2xl md:text-4xl mt-2">
              ${product?.price}
            </p>
            <Button className="order-1 lg:order-3 mb-15 md:mt-10 font-chewy text-lg md:text-2xl cursor-pointer">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductDetails;
