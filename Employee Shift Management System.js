//Task 1 Create an Employees Array of Employee Objects
let employeesDetails = [
    { name: 'Fahmid', day: 'Monday', hours: 6},
    { name: 'Sadman', day: 'Tuesday', hours: 7},
    { name: 'Raiyan', day: 'Wednesday', hours: 8},
    { name: 'Nayeem', day: 'Thursday', hours: 9}
];

// Task 2 Create a Function to Display Employee Shift Details:
function displayEmployeeShifts (employeeDetail){
    console.log (`Employee Name:${employeeDetail.name}` );
    console.log (`Works Day Shift :${employeeDetail.day}, Hours worked ${employeeDetail.hours}`);
    
}
// Testing function of displayEmployeeShifts
employeesDetails.forEach(displayEmployeeShifts); 

//output 
//Employee Name:Fahmid- Works Day Shift :Monday, Hours worked 6
//Employee Name:Sadman- Works Day Shift :Tuesday, Hours worked 7
//Employee Name:Raiyan- Works Day Shift :Wednesday, Hours worked 8
//Employee Name:Nayeem- Works Day Shift :Thursday, Hours worked 9
