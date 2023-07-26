import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stuff from "./components/Stuff";

const App = () => {
  return (
    <div>
        <Navbar />
        <main className="mt-16">
          <Home />
          <About />
          <Work />
          <Stuff />
          <Contact />
          <Footer />
        </main>
    </div>
  );
};

export default App;
