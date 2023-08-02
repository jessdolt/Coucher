import Folders from "./Components/Folders";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const Home = () => {
  return (
    <>
      <main className="bg-black w-screen h-screen text-neutral-300 uppercase px-12 max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <Folders />
      </main>
    </>
  );
};

export default Home;
