import OneFourLayout from "./components/OneFourLayout";
import Hero from './components/Hero';
import SixOneLayout from "./components/SixOneLayout";
import ThreeLayout from "./components/ThreeLayout";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main>
      <Hero/>
      <OneFourLayout/>
      <SixOneLayout/>
      <ThreeLayout title='Latest in PHP 8'/>
      <ThreeLayout title='Latest in Symfony'/>
      <ThreeLayout title='Latest in Docker'/>
      <Banner/>
      <Footer/>
    </main>
  )
};

export default Home;
