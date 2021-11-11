import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Logo from "./images/logo.png";

const Details = (props) => {
  const { state } = props.location;
  const { history } = props;
  const [data, setData] = useState();

  // ReFetch the episode As the APi Doesn't Provide it's Details
  useEffect(() => {
    const firstEpisode = async () => {
      const res = await axios.get(state.episode[0]);
      setData(res.data);
    };
    firstEpisode();
  }, [state.episode]);

  if (state) {
    return (
      <section className="flex flex-col items-center justify-evenly h-full md:h-screen bg-hero bg-cover">
        <LoadingBar progress={100} color="skyBlue" />
        <img
          src={Logo}
          alt="rick and morty"
          className="pt-4 w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 "
        />
        <div className=" flex flex-wrap justify-center bg-white md:flex-nowrap shadow-grayBox border-solid border-2 border-newGray rounded-lg p-2 h-8/12 md:h-2/5 my-4  w-10/12 md:w-9/12 lg:w-7/12 xl:w-5/12">
          <img
            src={state.image}
            alt={state.name}
            className="w-full md:w-2/4 rounded-lg"
          />
          <div className="flex flex-grow flex-col justify-around text-center font-bold text-xl w-1/2 mt-4 md:mt-0 md:ml-4">
            <h1 className="text-2xl">{state.name}</h1>
            <h2>{`Gender : ${state.gender}`}</h2>
            {state.status === "Alive" ? (
              <h1 className="text-green-600">{`Status : ${state.status}`}</h1>
            ) : state.status === "Dead" ? (
              <h1 className="text-red-600">{`Status : ${state.status}`}</h1>
            ) : (
              <h1 className="text-blue-300">{`Status : ${state.status}`}</h1>
            )}

            <h2>{`Species : ${state.species}`}</h2>
            <h2>{`Location : ${state.location.name}`}</h2>
            {data ? (
              <h2>{`Episode : ${data.name} - ${data.episode}`}</h2>
            ) : null}
          </div>
        </div>
        <Link to="/">
          <button className="h-10 px-9 m-2 my-4 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">
            Home
          </button>
        </Link>
      </section>
    );
  } else {
    // Maintain the Fallback Routes
    history.push("/404");
  }
};

export default Details;
