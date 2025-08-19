import Image from "next/image";
import Banner from "./components/Landing/Banner";
import ResponsiveContainer from "./components/ui/ResponsiveContainer";

export default function Home() {
  return (
    <>
    <ResponsiveContainer>
      <Banner/>
    </ResponsiveContainer>
    </>
  );
}
