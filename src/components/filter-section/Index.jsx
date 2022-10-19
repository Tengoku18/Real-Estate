import React from "react";
import FilterForm from "../formik-from/FilterForm";

const Index = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 py-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <h1 className="text-4xl text-gray-800 font-extrabold ">
        {" "}
        Rent any Properties.{" "}
      </h1>

      <FilterForm />
    </div>
  );
};

export default Index;
