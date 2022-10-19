import React from "react";
import { Formik } from "formik";
import SelectFilter from "./SelectFilter";
import DateFilter from "./DateFilter";
// import moment from "moment";
import LocationFilter from "./LocationFilter";
import { useContext } from "react";
import { FormContext } from "../../App";

const FilterForm = () => {
  const { setFormValues } = useContext(FormContext);

  return (
    <div>
      <Formik
        initialValues={{
          location: "",
          date: new Date(),
          type: "",
          price: "",
        }}
        onSubmit={(values, actions) => {
          // console.log("Formik Values are", moment(values.date).format("MMMM"));
          // console.log("formik values are", values);
          setFormValues(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex justify-around flex-wrap my-3  py-3 rounded-md border-none bg-slate-200 ">
              <LocationFilter
                name={"location"}
                labelName={"location"}
                onBlur={props.handleBlur}
              />

              <DateFilter name={"date"} labelName={"Date"} />

              <SelectFilter
                type={"select"}
                name={"price"}
                labelName={"Select Price"}
              />
              <SelectFilter
                type={"select"}
                name={"type"}
                labelName={"Select Type"}
              />

              <div className="flex items-center">
                <button
                  type="submit"
                  className="px-3 py-1 h-10  text-white font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-md "
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FilterForm;
