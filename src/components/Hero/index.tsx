import * as constants from "./constants";

const Hero = () => {
  return (
    <div>
      <div className="text-28 font-bold text-white">{constants.TITLE}</div>
      <div className="pt-26px text-18 font-bold">{constants.SUBTITLE}</div>
      <div className="pt-12px whitespace-pre-line text-14">
        {constants.CONTENT}
      </div>
    </div>
  );
};

export default Hero;
