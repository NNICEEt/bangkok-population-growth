import * as locales from "./locales";

const Hero = () => {
  console.log("hero component");
  return (
    <div>
      <div className="text-28 font-bold text-white">{locales.TITLE}</div>
      <div className="pt-26px text-18 font-bold">{locales.SUBTITLE}</div>
      <div className="pt-12px whitespace-pre-line text-14">
        {locales.CONTENT}
      </div>
    </div>
  );
};

export default Hero;
