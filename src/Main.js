import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import LoadingBar from "react-top-loading-bar";
import Select from "react-select";
import Logo from "./images/logo.png";
import Search from "./images/search-24.png";
import searchLine from "./images/search-fav.png";
import Results from "./results";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "unknown", label: "Unknown" },
];
const statusOptions = [
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];
const speciesOptions = [
  { value: "human", label: "Human" },
  { value: "humanoid", label: "Humanoid" },
  { value: "alien", label: "Alien" },
  { value: "robot", label: "robot" },
  { value: "unknown", label: "Unknown" },
];

const Main = () => {
  const alert = useAlert();
  const [options, setOptions] = useState({
    gender: "",
    status: "",
    species: "",
  });
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  const [species, setSpecies] = useState();
  const [input, setInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(100);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/`);
      const characters = res.data.results;
      setResult(characters);
    };
    data();
  }, []);

  // Handling Options Reset Values
  const handleReset = () => {
    setGender(null);
    setStatus(null);
    setSpecies(null);
    setOptions({
      gender: "",
      status: "",
      species: "",
    });
  };

  async function getCharacters() {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${input}&gender=${options.gender}&status=${options.status}&species=${options.species}`
      );
      // Search Handling
      if (input) {
        setLoading(0);
        setActive(false);
        setLoading(100);
        const characters = res.data.results;
        setResult(characters);
        setActive(true);
      } else alert.show("Invalid Character!");
    } catch (error) {
      alert.show("Invalid Character!");
      console.error(error);
    }
  }

  return (
    <div>
      <LoadingBar progress={loading} color="skyBlue" />
      <section className="h-screen bg-hero-small bg-cover md:bg-hero bg-no-repeat px-4 flex flex-col items-center">
        <img src={Logo} alt="rick and morty" className="pt-8" />
        <img
          src={searchLine}
          alt="search your favourite character"
          className="py-8 xl:pt-4 w-11/12"
        />

        <form className=" flex justify-center content-center w-11/12 ">
          <input
            typeof="search"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            className="p-4 pl-8 w-11/12 sm:w-9/12 rounded-xl mr-4 focus:outline-none focus:ring-2 focus:ring-skyBlue focus:border-transparent"
            placeholder="wabba labba dub dub ...."
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              getCharacters();
            }}
            className="bg-skyBlue p-4 flex justify-center rounded-xl items-center hover:opacity-70"
          >
            <img src={Search} alt="search" />
          </button>
        </form>
        <form
          onReset={handleReset}
          className="flex flex-wrap mt-8 w-11/12 h-16 justify-evenly items-center"
        >
          <Select
            options={genderOptions}
            isSearchable={false}
            onChange={(e) => {
              setOptions({ ...options, gender: e.value });
              setGender(e);
            }}
            value={gender}
            placeholder="Gender"
            className="mt-4 ml-2"
          />
          <Select
            options={statusOptions}
            isSearchable={false}
            onChange={(e) => {
              setOptions({ ...options, status: e.value });
              setStatus(e);
            }}
            value={status}
            placeholder="Status"
            className="mt-4 ml-2"
          />
          <Select
            options={speciesOptions}
            isSearchable={false}
            onChange={(e) => {
              setOptions({ ...options, species: e.value });
              setSpecies(e);
            }}
            value={species}
            placeholder="Species"
            className="mt-4 ml-2"
          />
          <button
            type="reset"
            value="Reset"
            className="text-gray-600 bg-skyBlue py-2 px-4  text-lg mt-4 font-semibold rounded-lg items-center hover:opacity-90"
          >
            Rest
          </button>
        </form>
      </section>
      <section className="flex flex-wrap justify-around h-auto my-4 pt-4">
        <div className="absolute">
          <h1 className="m-auto text-center font-semibold text-2xl">
            Characters
          </h1>
        </div>
        <ScrollIntoViewIfNeeded
          active={active}
          className="flex flex-wrap justify-around h-auto my-4 pt-4"
        >
          {result
            ? result
                .slice(0, 5)
                .map((character) => (
                  <Results
                    key={character.id}
                    id={character.id}
                    props={character}
                  />
                ))
            : null}
        </ScrollIntoViewIfNeeded>
      </section>
      <section className="bg-quote bg-cover">
        <p className=" text-white text-center font-bold text-3xl md:text-4xl lg:text-6xl pt-2 md:py-8 xl:py-12 ">
          " You ask a lot of questions, Morty, <br /> Not very charismatic "
        </p>
      </section>
    </div>
  );
};

export default Main;
