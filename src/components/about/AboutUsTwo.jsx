"use client";
import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import coverImage from "../../../public/images/carbonato-de-calcio.jpg";
import ImageToSideText from "../home/ImageToSideText";
import DoubleSideToSide from "../home/DoubleSideToSide";

const AboutUsTwo = ({ aboutDic, homeDic }) => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div>
      <div
        id="about-us"
        className="w-full h-[500px] overflow-hidden top-0 relative flex justify-center items-center flex-col "
      >
        <div className="absolute bg-black bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={400}
          priority
          loading="eager"
          alt="about us cover image"
          className="object-cover object-bottom h-full w-full"
        />
        <div className="absolute z-10 text-white text-5xl maxsm:text-3xl  font-primary w-[50%] maxsm:w-[80%] text-center">
          <p className="uppercase text-xs tracking-widest font-secondary">
            {aboutDic.hero.title}
          </p>
          <h3>{aboutDic.hero.subtitle}</h3>
        </div>
      </div>
      <DoubleSideToSide homeDic={homeDic} />
      <ImageToSideText homeDic={homeDic} />
    </div>
  );
};

export default AboutUsTwo;
