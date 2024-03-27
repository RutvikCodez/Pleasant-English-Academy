"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const Imageurls = [
    "/static/pea.jpg",
    "/static/pea2.jpg",
    "/static/pea3.jpg",
    "/static/pea4.jpg",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[90%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Imageurls.map((e, i) => (
          <CarouselItem key={i} className="h-[90vh] bg-white">
            <div className="relative w-full h-full">
              <Image alt="carasoul image abient" src={e} fill />
              <div className="absolute inset-0 bg-black opacity-85"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-4xl font-bold">
                  PLEASANT ENGLISH ACADEMY
                </h1>
                <h2 className="text-xl font-medium lg:w-1/2 text-center">
                  Let us guide you to confident communication. Immerse yourself
                  in the language with our expert instructors.
                </h2>
                <Button className="bg-black p-4 rounded-md hover:bg-green-500 transition-colors duration-300">
                  Book an Inquiry
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroSection;
