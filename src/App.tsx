import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";

export default function App() {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <Hero />
      <Introduction />
      <main className="flex flex-col w-full overflow-hidden">
        <Work />
        <About />
        <Footer />
      </main>
    </>
  );
}
