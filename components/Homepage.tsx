import React from "react";
import Places from "./Homepage/Places";
import List from "./Homepage/List";
import Review from "./Homepage/Review";
import Reviewer from "./Homepage/Reviewer";

const Main = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto flex flex-col items-center">
        <h1 className="mb-4 mt-2 text-lg font-semibold">Popular Places This Week</h1>
        <div className="flex justify-center mb-10">
          {[0, 1, 2, 3].map((num) => {
            return <Places key={num} />;
          })}
        </div>
        <h1 className="mb-4 mt-10 text-lg font-semibold">Popular List This Week</h1>
        <div className="flex flex-wrap justify-center mb-10">
          {[0, 1, 2, 3].map((num) => {
            return <List key={num} />;
          })}
        </div>
        <div className="w-full px-16 mt-10 mb-10 grid gap-x-7 grid-cols-7 2xl:w-3/4 2xl:px-4">
          <div className="col-span-5">
            <h1 className="text-lg font-semibold mb-4">Popular Review This Week</h1>
            {[0, 1, 2, 3, 4].map((num) => {
              return <Review key={num} />;
            })}
          </div>
          <div className="col-span-2 h-fit sticky top-5">
            <h1 className="text-lg font-semibold mb-4">Popular Reviewer</h1>
            {[0, 1, 2, 3].map((num) => {
              return <Reviewer key={num} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
