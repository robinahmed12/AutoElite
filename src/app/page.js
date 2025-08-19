import Image from "next/image";
import Banner from "./components/Landing/Banner";
import ResponsiveContainer from "./components/ui/ResponsiveContainer";
import WhatWeDO from "./components/Landing/WhatWeDO";

export default function Home() {
  return (
    <>
   
      <Banner/>
      <ResponsiveContainer>
        <WhatWeDO/>
      </ResponsiveContainer>
      
    
    </>
  );
}
