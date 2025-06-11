"use client";

import React from "react";
import Banner from "@/components/sections/Banner";
import Story from "@/components/sections/Story";
import Products from "@/components/sections/Products";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import PurchaseLocations from "@/components/sections/PurchaseLocations";

export default function Home() {
  return (
    <main>
      <section id="banner">
        <Banner />
      </section>

      <section id="story">
        <Story />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="purchase-locations">
        <PurchaseLocations />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
