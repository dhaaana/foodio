import React from "react";

const Reviewer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 p-1 w-full">
        <img className="rounded-full p-3" src="https://thispersondoesnotexist.com/image" alt="" />
        <div className="col-span-3 mx-2 flex flex-col justify-center">
          <h1 className="font-medium">M Hakim</h1>
          <p className="text-sm text-gray-500 mt-1">2000 places, 450 review</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Reviewer;
