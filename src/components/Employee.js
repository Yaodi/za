import React from "react";

const Employee = (props) => {
  console.log(!!props.centered);
  let employee = props.employee;
  return props.centered ? (
    <>
      <div className="centered-profile">
        <img
          src={`images/${employee.image}`}
          className="accounting-picture"
          alt={employee.name}
        />
        <br />
        <b>{employee.name}</b>
        <i>{employee.title}</i>
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
              Book an Appointment
            </a>
          </button>
        </span>
      </div>
    </>
  ) : (
    <>
      <div className="employee-profile">
        <div className="employee-top">
          <img
            src={`images/${employee.image}`}
            className="accounting-picture"
            alt={employee.name}
          />
          <br />
          <b>{employee.name}</b>
          <i>{employee.title}</i>
          <br />
          <p>{employee.bio}</p>
          <br />
        </div>
        <div className="employee-contact">
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
              Book an Appointment
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Employee;
