import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import { Product } from "./pages/Product";
import Location from "./pages/Location";
import SimpleSwiper from "./components/Swiper";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-300">
        <Navbar />
        <main className="flex-grow pt-8"> 
          <div className="space-y-16 px-4 py-8">
            <div className="min-h-screen bg-gray-100 p-5">
              <SimpleSwiper />
            </div>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="team">
              <Team />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <section id="product">
              <Product />
            </section>
            <Location />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
