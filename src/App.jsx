import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/Newsletter";
import Packages from "./components/package/Packages";
import Teams from "./components/team/Teams";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Packages />
      <Teams />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
