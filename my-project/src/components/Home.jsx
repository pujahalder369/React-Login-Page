import background from "../assets/main.jpg";
import Footer from "./Footer";
import Header from "./Header";
function Home() {
  return (
    <>
      <Header />
      <img src={background} alt="photo" className="h-[85vh] w-[100%]" />
      <Footer />
    </>
  );
}

export default Home;
