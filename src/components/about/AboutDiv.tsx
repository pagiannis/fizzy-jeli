import { CardContainer } from "../ui/CardContainer";

const AboutDiv = () => {
  return (
    <CardContainer title="ABOUT" width={4} className="p-5 pt-10 sm:pt-15">
      <p className="text-center text-lg md:text-xl lg:text-2xl text-pink-400 leading-relaxed font-chewy">
        At Fizy-Jeli, we craft effervescent delights that spark joy in every
        bite and sip. Our minimalist approach celebrates pure flavors—no
        artificial additives, just playful bubbles and clean sweetness. Designed
        for those who appreciate subtle sophistication in life's little fizzes.
      </p>
    </CardContainer>
  );
};

export default AboutDiv;
