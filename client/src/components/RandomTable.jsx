import React from 'react';
import './Users/Table.css';


const generateStaticData = () => {
  const data = [
    { name: 'Phoebe', age: 25, mark: 99, place: 'France' },
    { name: 'Chandler', age: 25, mark: 67, place: 'Italy' },
    { name: 'Joey', age: 27, mark: 89, place: 'China' },
    { name: 'Ross', age: 24, mark: 56, place: 'Nepal' },
    { name: 'Rachel', age: 25, mark: 78, place: 'India' },
    { name: 'Monica', age: 28, mark: 55, place: 'USA' },
  ];

  return data;
};

const RandomTable = () => {
  const tableData = generateStaticData();

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mark</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.mark}</td>
              <td>{row.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RandomTable;


