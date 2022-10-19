import { data } from "../data/Data";
import React from "react";
import { FormContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import moment from "moment";

const PropetyCard = () => {
  const { formValues } = useContext(FormContext);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (formValues) {
      console.log("formvalues", formValues);
      const dateMonth = moment(formValues.date).format("MMMM");
      const filterData = data?.filter(
        (item) =>
          item?.location === formValues?.location &&
          item.date === dateMonth &&
          parseInt(item.price) > parseInt(formValues.price) - 500 &&
          parseInt(item.price) <= parseInt(formValues.price) &&
          item.type === formValues.type
      );
      setFilteredData(filterData);
      console.log("datas", filterData);
    }
  }, [formValues]);
  return filteredData.length !== 0 ? (
    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
      {filteredData?.map((product, index) => (
        <div key={index} className="group relative my-3">
          <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">
            <a href={product.href}>
              <span className="absolute inset-0" />
              {product.location}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.type}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            ${product.price}/month
          </p>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-xl md:text-2xl lg:text-4xl text-center h-48  flex justify-center  items-center font-semibold text-black">
      {" "}
      Sorry, Couldn't find any matches.{" "}
    </div>
  );
};

export default PropetyCard;
