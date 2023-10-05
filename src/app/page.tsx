import Image from "next/image";
import TestReduc from "./TestReduc";
import Herosection from "@/components/Herosection";
import AboutEv from "@/components/AboutEv";
import Story from "@/components/Story";
import Choose from "@/components/Choose";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <AboutEv />
      <Story />
      <Choose/>
      {/* <TestReduc/> */}
    </main>
  );
}
