import React from "react";

const Review = () => {
  return (
    <>
      <div className="p-1 my-1 grid grid-cols-7">
        <div className="group relative h-28 w-20 m-3 rounded-md col-span-1">
          <div className="absolute w-full h-full bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-md shadow-md transition ease-in-out duration-1000 group-hover:blur-lg group-hover:duration-200"></div>
          <img className="relative w-full h-full object-cover rounded-md" src="https://s3-media0.fl.yelpcdn.com/bphoto/ttFJjeLVKNdNjQ74ytVPrA/348s.jpg" alt="food" />
        </div>
        <div className="ml-2 p-3 col-span-6">
          <div className="flex justify-between">
            <h1 className="font-semibold">Soto Ayam Lamongan Cak Har</h1>
            <div>
              {[0, 1, 2, 3].map((num) => {
                return (
                  <svg key={num} xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                );
              })}
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-sm text-gray-500">
            Reviewed by <img className="inline rounded-full w-4 h-4" src="https://thispersondoesnotexist.com/image" alt="" /> <span className="text-black font-medium">Gilang</span>
          </h1>
          <p className="text-sm mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, placeat modi rem nam at repudiandae, mollitia possimus vel aspernatur magnam, eligendi ab exercitationem qui unde atque maxime animi commodi? Iste.
          </p>
          <div className="flex items-center content-center text-sm text-gray-500 mt-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </span>
            690 likes
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black ml-2 mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
            </span>
            7 comment
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};

export default Review;
