import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import { Product } from "./pages/Product";
import Location from "./pages/Location";
import FLoatingWa from "./components/FLoatingWa";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-4">
          <div className="space-y-16">
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="team">
              <Team />
            </section>
            {/* <section id="contact">
              <Contact />
            </section> */}
            <section id="product">
              <Product />
            </section>
            <Location />
          </div>
        </main>
        <Footer />
        <FLoatingWa phoneNumber="082276548976" />
      </div>
    </BrowserRouter>
  );
}

export default App;
