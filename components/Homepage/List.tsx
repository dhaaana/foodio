import React from "react";

const List = () => {
  return (
    <div>
      <div className="grid grid-cols-3 min-h-[5rem] w-[29rem] mx-5 my-4">
        <div className="h-28 w-20 m-4 rounded-md flex -space-x-10">
          <img className="w-full h-full object-cover rounded-md float-left" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttFJjeLVKNdNjQ74ytVPrA/348s.jpg" alt="food" />
          <img className="w-full h-full object-cover rounded-md float-left" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttFJjeLVKNdNjQ74ytVPrA/348s.jpg" alt="food" />
          <img className="w-full h-full object-cover rounded-md float-left" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttFJjeLVKNdNjQ74ytVPrA/348s.jpg" alt="food" />
        </div>
        <div className="ml-6 px-2 py-4 col-span-2 flex flex-col justify-between">
          <h1 className="text-lg font-medium">10 Tempat Makan Bakso Paling Enak di Surabaya</h1>
          <div className="flex justify-between text-sm mt-2">
            <div>by Ahmad T.</div>
            <div className="flex items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </span>
              690
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
              </span>
              7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
