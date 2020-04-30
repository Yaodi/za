import React from "react";

const Employee = (props) => {
  let employee = props.employee;
  return (
    <>
      <div className="employee-profile">
        <img
          src={`images/${employee.image}`}
          className="accounting-picture"
          alt={employee.name}
        />
        <p>{employee.bio}</p>
        <span>
          Phone: <a href={`tel:${employee.phone}`}>{employee.phone}</a>
          <br />
          Email: <a href={`mailto:${employee.email}`}>{employee.email}</a>
          <br />
          <button className="appointment-button">
            <a href="https://www.calendly.com" target="blank">
              Schedule an appointment
            </a>
          </button>
        </span>
      </div>
    </>
  );
};

export default Employee;
