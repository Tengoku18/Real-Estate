import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";
const DateFilter = ({ name, labelName }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <div className="flex flex-col">
              <label> {labelName} </label>

              <DatePicker
                id={name}
                {...field}
                className="border focus:outline-none  h-10 border-black rounded-md pl-1 text-gray-800"
                selected={value}
                onChange={(date) => {
                  setFieldValue(name, date);
                }}
                placeholderText={"DD/MM/YYYY"}
                minDate={new Date()}
              />
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default DateFilter;
