import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Portal from "./images/portal.png";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center bg-black h-screen">
      <LoadingBar progress={100} color="skyBlue" />
      <img
        className="w-11/12 md:w-7/12 lg:w-7/12 xl:w-5/12"
        src={Portal}
        alt="404 page not found"
      />
      <div className="text-center text-white  tracking-widest font-light text-4xl leading-relaxed">
        <p>Wabba Labba Dub Dub ....</p>
        <p>Portal Not Found</p>
      </div>
      <Link to="/">
        <button className="h-10 px-9 m-2 my-4 text-purple-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-600">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Page404;
