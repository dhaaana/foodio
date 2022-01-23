import React from "react";

const Places: React.FC = () => {
  return (
    <div>
      <div className="group relative h-72 w-56 m-4 rounded-md">
        <div className="absolute w-full h-full bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-md shadow-md transition ease-in-out duration-1000 group-hover:blur-lg group-hover:duration-200"></div>
        <div className="relative w-full h-full flex items-center justify-center transition duration-250">
          <div className="absolute flex flex-col items-center justify-center p-3 w-3/4 h-3/4 opacity-0 bg-gradient-to-tr from-slate-300 to-white rounded-sm transition duration-150 group-hover:opacity-95 group-hover:shadow-md">
            <h1 className="text-lg font-semibold">Scar's Pizza</h1>
            <h1 className="text-gray-700 mb-4">New York</h1>
            <div className="flex justify-center space-x-2">
              <h1>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                8.0
              </h1>
              <h1>
                <span>
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 inline h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </span>
                123
              </h1>
            </div>
          </div>
          <img className="w-full h-full object-cover rounded-md" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttFJjeLVKNdNjQ74ytVPrA/348s.jpg" alt="food" />
        </div>
      </div>
    </div>
  );
};

export default Places;
