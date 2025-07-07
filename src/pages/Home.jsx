import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImages from "../components/HeroImages";
import Featured from "../components/Featured";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroImages />
      <Featured />
      <Footer />
    </>
  );
}
