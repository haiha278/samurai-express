"use client";

import { Header } from "@/components/common/header/Header";
import { AboutUs } from "@/components/content/AboutUs";
import { Gallery } from "@/components/content/Gallery";
import { SignatureDishes } from "@/components/content/SignatureDishes";
import { UniqueThing } from "@/components/content/UniqueThing";

export default function Home() {
  return (
    <div>
      <div className="fixed w-full top-0 left-0 z-[1000]">
        <Header />
      </div>
      <div>
        <AboutUs />
      </div>
      <div className="bg-[rgba(247,242,238,255)]">
        <UniqueThing />
      </div>
      <div>
        <SignatureDishes />
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}
