import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="container mx-auto min-h-[85px] p-3 flex justify-between">
        <h1 className="underline-animation text-3xl font-semibold mt-2">F&B Catalog</h1>
        <div>
          <button className="font-medium mx-3 hover:text-gray-700">Login</button>
          <button className="font-medium mx-3 hover:text-gray-700">Register</button>
          <input type="text" placeholder="Search" className="transition ease-in-out delay-150 border-2 border-black mx-2 p-2 w-[10rem] rounded focus:shadow-md focus:outline-none " />
          <button className="transition ease-in-out bg-white mx-2 text-black p-2 border-2 border-black rounded hover:bg-black hover:text-white hover:shadow-lg">Search</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
