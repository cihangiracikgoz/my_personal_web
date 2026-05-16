import { Suspense } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import DonationToast from "@/components/DonationToast";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Journey />
      <Projects />
      <Suspense>
        <DonationToast />
      </Suspense>
    </>
  );
}
