import { Link } from "react-router-dom";
const Results = (data) => {
  return (
    <div className=" flex justify-between shadow-grayBox border-solid border-2 border-newGray rounded-lg p-1 pr-2 xl:pr-0 m-4 mt-8 w-11/12 h-44 md:h-52  md:w-3/6 lg:w-2/5 xl:w-2/6 ">
      <img
        src={data.props.image}
        alt={data.props.name}
        className="rounded-lg w-1/2 xl:w-2/5 "
      />
      <div className="flex flex-col flex-grow justify-items-center items-center	 justify-around font-sans xl:py-2 xl:px-8">
        <h1 className="text-center text-newGray text-xl md:text-2xl font-semibold">
          Name: {data.props.name}
        </h1>
        {data.props.status === "Alive" ? (
          <h1 className="text-center text-green-600 text-xl md:text-2xl">{`Status : ${data.props.status}`}</h1>
        ) : data.props.status === "Dead" ? (
          <h1 className="text-center text-red-600 text-xl md:text-2xl">{`Status : ${data.props.status}`}</h1>
        ) : (
          <h1 className="text-center text-blue-300 text-xl md:text-2xl">{`Status : ${data.props.status}`}</h1>
        )}
        {/* Sending Props to the Child through Routes */}
        <Link
          to={{
            pathname: `/character/:${data.id}`,
            state: data.props,
          }}
        >
          <button className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
