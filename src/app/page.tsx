import Aboutsection from "@/components/Landingpage/Aboutsection";
import Contactform from "@/components/Landingpage/Contactform";

import Herosection from "@/components/Landingpage/Herosection";
import Servicesection from "@/components/Landingpage/Servicesection";


export default function Home() {
  return (
    <>

    <Herosection/>
    <Servicesection/>
    <Aboutsection/>
      <Contactform/>
    </>
  );
}
