import FeaturedGame from "@/components/organisms/FeaturedGame";
import Footer from "@/components/organisms/Footer";
import MainBanner from "@/components/organisms/MainBanner";
import Navbar from "@/components/organisms/Navbar";
import Reached from "@/components/organisms/Reached";
import TransactionStep from "@/components/organisms/TransactionStep";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Footer />
    </>
  );
}
