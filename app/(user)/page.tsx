"use client";
import Hero from "@/components/Hero";
import CoreCapabilities from "@/components/CoreCapabilities";
import AboutUs from "@/components/AboutUs";
import Header from "@/components/common/Header";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Susandglobal from "@/components/Susandglobal";

import Footer from "@/components/common/Footer";
import FAQ from "@/components/FAQ";
import Recognition from "@/components/Recognition";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Hero onVerify={() => router.push("/verify")} />
      <CoreCapabilities />
      <AboutUs />
      <Services />
      <Products />
      <Recognition />
      <Susandglobal />
      <FAQ />
      <Footer />
    </>
  );
};

export default Page;
