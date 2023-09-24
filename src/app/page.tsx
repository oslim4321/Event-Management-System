import Image from "next/image";
import TestReduc from "./TestReduc";
import Herosection from "@/components/Herosection";
import AboutEv from "@/components/AboutEv";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <AboutEv/>
      {/* <TestReduc/> */}
    </main>
  );
}
