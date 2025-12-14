// Find Method
// Returns the first element that satisfies a specified condition
// Useful for searching specific data

const employees = [
  {id: 1, name: 'Alice', Eid: 'EMP001', 'Contact details': 'alice@example.com', Role: 'Manager', Designation: 'Project Manager', Experience: '5 years'},
  {id: 2, name: 'Bob', Eid: 'EMP002', 'Contact details': 'bob@example.com', Role: 'Engineer', Designation: 'Software Engineer', Experience: '3 years'},
  {id: 3, name: 'Charlie', Eid: 'EMP003', 'Contact details': 'charlie@example.com', Role: 'Analyst', Designation: 'Data Analyst', Experience: '2 years'}
];

let employee = employees.find((e) => e.id === 2);
//employees.find(placeHolderNameforArrayRowAKAalias)
//array.find(function) --> argument of the find statement

console.log(`Details of the employee:
Name: ${employee.name}
Eid: ${employee.Eid}
Contact details: ${employee['Contact details']}
Role: ${employee.Role}
Designation: ${employee.Designation}
Experience: ${employee.Experience}`);
