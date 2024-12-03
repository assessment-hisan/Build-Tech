function App() {
  return (
    <>
      <dciv
        className="relative w-full h-screen flex flex-col justify-center items-center bg-zinc-950 font-inter px-10 
      backround"
      >
        <h1 className="text-5xl md:text-[5rem] font-bold md:font-bold  font-inter text-zinc-300 text-center">
          Build Tech Enterprises
        </h1>
        <img src="/pac.png" alt="" className="shadow-inner md:w-[18rem]" />

        <p className="text-zinc-200  text-lg md:text-2xl pt-8 md:pt-4">
          <span className="uppercase">jarak</span> Gypsum Plastering
        </p>
        <div>
          <p className="text-zinc-400  text-lg pt-2 text-center">
            with <span className="text-xl font-semibold text-white">8</span>{" "}
            years of experience over
            <span className="text-xl font-semibold text-white"> 4000</span>{" "}
            completed projects, we offer you high-quality gypsum Plastering
          </p>
        </div>
      </dciv>
    </>
  );
}

export default App;
