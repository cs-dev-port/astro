"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import ZodiacCard from "./zodiac-card";
import { zodiacSigns } from "@/lib/data/zodiacData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LogoLooper() {
  const router = useRouter();

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1 ">
        {zodiacSigns.map((sign) => (
          <CarouselItem
            key={sign.name}
            className="pl-1 md:basis-1/2 lg:basis-1/3 "
          >
            <div className="h-full flex items-center justify-center">
              <ZodiacCard
                name={sign.name}
                iconPath={sign.iconPath}
                url={sign.url}
                description={""}
                onClick={() => router.push(sign.url)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
