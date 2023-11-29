
import React from 'react';

const employees = {
  Alex: {
    name: "Alex",
    skills: [
      { name: "ReactJS", type: "Frontend" },
      { name: "nodeJS", type: "Backend" },
    ],
  },
  Anna: {
    name: "Anna",
    skills: [
      { name: "Angular", type: "Frontend" },
      { name: "Python", type: "Backend" },
    ],
  },
};

function EmployeeList() {
    return (
      <div>
        {Object.keys(employees).map((employeeName) => (
          <div key={employeeName}>
            <h3>{`Employee: ${employees[employeeName].name}`}</h3>
            <ul>
              {employees[employeeName].skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
               {`${skill.name} - ${skill.type}`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

export default EmployeeList;
