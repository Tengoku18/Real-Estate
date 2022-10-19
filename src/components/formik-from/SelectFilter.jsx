import React from "react";
import { Field } from "formik";
const priceRange = [
  { key: "select price range", value: "" },
  { key: "upto $500", value: 500 },
  { key: "$500-$1000", value: 1000 },
  { key: "$1000-$1500", value: 1500 },
  { key: "$1500-$2000", value: 2000 },
];

const propertyType = [
  { key: "select property type", value: "" },
  { key: "Land", value: "Land" },
  { key: "Office", value: "Office" },
  { key: "TownHome", value: "TownHome" },
  { key: "Apartment", value: "Apartment" },
];

const SelectFilter = ({ type, name, labelName }) => {
  var options = [];
  if (name === "price") {
    options = [...priceRange];
  } else {
    options = [...propertyType];
  }

  return (
    <div className="flex flex-col py-1 ">
      <div>
        <label> {labelName} </label>
      </div>
      <div>
        <Field
          as={type}
          name={name}
          className=" border border-black h-10 rounded-md px-2"
        >
          {" "}
          {options.map((item) => {
            return (
              <option className="h-8" key={item.key} value={item.value}>
                {item.key}{" "}
              </option>
            );
          })}{" "}
        </Field>
      </div>
    </div>
  );
};

export default SelectFilter;
