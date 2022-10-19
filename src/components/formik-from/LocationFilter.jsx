import React, { useState } from "react";
import { Field } from "formik";
import { City } from "../data/Location";

const LocationFilter = ({ name, labelName, onBlur }) => {
  const [vanish, setVanish] = useState(true);
  const [initialValue, setInitialValue] = useState("");
  const [location, setLocation] = useState([]);

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          return (
            <div className="flex flex-col">
              <label> {labelName} </label>
              <input
                value={initialValue}
                name={name}
                className="focus:outline-none border border-black px-1 h-10 rounded-md  relative"
                type="text"
                // onClick={() => {
                //   setVanish(false);
                // }}
                onChange={(e) => {
                  const data = e.target.value;

                  const filteredData = City.filter((item) =>
                    item.toLowerCase().includes(data.toLowerCase())
                  );
                  setLocation(filteredData);
                  setInitialValue(data);
                  setVanish(false);
                }}
              />
              <div
                className={` absolute top-64 overflow-scroll h-60 ${
                  vanish ? "hidden" : "block"
                }  bg-gray-200 z-40 w-32 rounded-md text-gray-500`}
              >
                {location &&
                  location.map((city, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 py-1 cursor-pointer"
                        onClick={() => {
                          setFieldValue(name, city);
                          setInitialValue(city);
                          setVanish(true);
                        }}
                      >
                        {" "}
                        {city}{" "}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default LocationFilter;
