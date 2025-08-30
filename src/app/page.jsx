import React from "react";
import Hero from "@/components/Hero";
import { TextScrollDemo as Marquee } from "@/components/Marquee";
import GlowingCard from "@/components/GlowingCard";
import Image from "next/image";
import myImage from "../assets/image.png";
import { TextReveal } from "@/components/magicui/text-reveal";
import Marquee2 from "@/components/Marquee2";
import Domain from "@/components/Domain";
import WhyChoose from "@/components/WhyChoose";
import Steps from "@/components/Steps";
import StackedScrollCards from "@/components/StackedScrollCards";
import FAQ from "@/components/FAQ";
import { Spotlight } from "@/components/Spotlight";
import SvgMaskEffect from "@/components/SvgMaskEffect";

const page = () => {
  return (
    <div>
      <Spotlight className="h-screen" />

      {/* <Image src={myImage} alt="" className='h-[100vh]' /> */}

      <Hero />
      {/* <Marquee className=""/> */}
      <Marquee2 className="" />
      <TextReveal className="special-font bg-black md:text-2xl text-xl">We don’t just build websites, we build growth engines 🚀</TextReveal>

      <Domain />
      <WhyChoose />

      {/* <Steps /> */}
      {/* <StackedScrollCards /> */}
      {/* <SvgMaskEffect /> */}

      <FAQ />
    </div>
  );
};

export default page;
