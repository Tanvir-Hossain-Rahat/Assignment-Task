import Banner from "./Components/Banner/page";
import Footer from "./Components/Footer/page";
import Middlepart from "./Components/Middlepart/page";
import Navbar from "./Components/Navbar/page";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Middlepart/>
      <Footer/>
    </>
  );
}
