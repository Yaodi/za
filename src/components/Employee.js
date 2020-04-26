import React from "react";

const employee = (props) => {
  let employee = props.employee;
  return (
    <>
      <img src={`images/${employee.image}`} className="accounting-picture" />
    </>
  );
};

export default employee;
