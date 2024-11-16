import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JoinUs from "./Sections/JoinUs";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Revolution from "./Sections/Revolution";
import Tokenization from "./Sections/Tokenization";
import WhyUs from "./Sections/WhyUs";

export default function LandingPage() {

  const refHero = useRef(null);
  const refRevolution = useRef(null);
  const refWhyUs = useRef(null);
  const refJoinUs = useRef(null);
  const refTokenization = useRef(null);
  const refContact = useRef(null);

  return (
    <>
      <Header 
      refHero={refHero} 
      refRevolution={refRevolution} 
      refWhyUs={refWhyUs} 
      refJoinUs={refJoinUs}
      refTokenization={refTokenization} 
      refContact={refContact}
      />
      <main>
        <Hero ref={refHero} refNext={refRevolution}/>
        <Revolution ref={refRevolution}/>
        <WhyUs ref={refWhyUs}/>
        <Tokenization ref={refTokenization}/>
        <JoinUs ref={refJoinUs}/>
        <Contact ref={refContact}/>
      </main>
      <Footer />
    </>
  )
}