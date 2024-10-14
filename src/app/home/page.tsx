"use client";

import { Header } from "@/components/common/header/Header";
import { AboutUs } from "@/components/content/AboutUs";
import { UniqueThing } from "@/components/content/UniqueThing";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <AboutUs />
      </div>
      <div className="bg-[rgba(247,242,238,255)]">
        <UniqueThing />
      </div>
    </div>
  );
}
