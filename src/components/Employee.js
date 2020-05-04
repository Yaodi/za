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
          <a
            href={`tel:${employee.phone}`}
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Crimson Text",
            }}
          >
            {employee.phone}
          </a>
          <br />
          <a
            href={`mailto:${employee.email}`}
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Crimson Text",
            }}
          >
            {employee.email}
          </a>
          <br />
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
