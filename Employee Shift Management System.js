//Task 1 Create an Employees Array of Employee Objects
let employeesDetails = [
    { name: 'Fahmid', shifts: [{ day: 'Monday', hours: 6 }] },
    { name: 'Sadman', shifts: [{ day: 'Tuesday', hours: 7 }] },
    { name: 'Raiyan', shifts: [{ day: 'Wednesday', hours: 8 },] },
    { name: 'Nayeem', shifts: [{ day: 'Thursday', hours: 9 }] }
];
// Task 2 Create a Function to Display Employee Shift Details:
function displayEmployeeShifts (employeeDetail){
    console.log (`Employee Name:${employeeDetail.name}` );
// Using loop fuction to look through each employees shifr and days of hours
    employeeDetail.shifts.forEach(shift => {
    console.log (`Works Day Shift :${employeeDetail.day}, Hours worked ${employeeDetail.hours}`);
    
    });
}
    
// Testing function of displayEmployeeShifts
employeesDetails.forEach(displayEmployeeShifts); 

//output 
//Employee Name:Fahmid- Works Day Shift :Monday, Hours worked 6
//Employee Name:Sadman- Works Day Shift :Tuesday, Hours worked 7
//Employee Name:Raiyan- Works Day Shift :Wednesday, Hours worked 8
//Employee Name:Nayeem- Works Day Shift :Thursday, Hours worked 9

// Task 3- Create a Function to Assign a New Shift:
function assignShift(employeeName, day, hours) {

    // Checking if the employee exists

    let employee = employeesDetails.find(employee => employee.name === employeeName); 
    
    // If employee not found log an Error message 
    if (!employee) {
        console.log(`Error: Employee Name: ${employeeName} not found`);
        return;
    }
    // Check if the employee already has a shift on a given day
    let existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}`);
        return;
    }
    // Add a new shift to the employee's shifts array
    employee.shifts.push({day, hours});
    console.log(`Shift on ${day} for ${hours} hours is assigned to ${employeeName}`);
}
// Testing by Assigning  shift to new employee Shrabasty 
assignShift("Shrabasty", "Thursday", 8);// Error: Employee Name: Shrabasty not found

// Testing by Assigning  shift to exsisting employee Fahmid
assignShift("Fahmid", "Monday", 8);// Error: Fahmid already has a shift on Monday

// Testing by Assigning  shift to exsisting employee Sadman
assignShift("Sadman", "Thursday", 8);// Shift on Thursday for 8 hours is assigned to Sadman

// Task 4 Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    let employee = employeesDetails.find(employee => employee.name === employeeName);

     // Calculate the total hours by summing up the hours from all shifts
     let totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
     // If employee not found log an Error message 
    if (!employee) {
        console.log(`Error: Employee Name: ${employeeName} not found`);
        return;
    }
    
     console.log(`Total hours worked by ${employeeName}: ${totalHours} hours`);
     return totalHours;
 }
 calculateTotalHours("Fahmid");  // Total hours worked by Fahmid: 6 hours
calculateTotalHours("Sadman");  // Total hours worked by Sadman: 15 hours
calculateTotalHours("Raiyan");  // Total hours worked by Raiyan: 8 hours
calculateTotalHours("Nayeem");  // Total hours worked by Nayeem: 9 hours


// Task 5: Create a Function to List Employees with Free Days


function listAvailableEmployees(day) {
    // Find employees who don't have a shift on the given day

    let availableEmployees = employeesDetails.filter(employee => 

        //Tests if at least one element passes a given test. 

        !employee.shifts.some(shift => shift.day === day)
    );

    // Check if there are no available employees
    if (availableEmployees.length === 0) {
        console.log(`No employees are available on ${day}.`);
    } else {
        console.log(`Employees available on ${day}:`);
        availableEmployees.forEach(employee =>  console.log(employee.name));
            
    }
}

// Testing the function
listAvailableEmployees("Monday");  
// Output Employees available on Monday: Sadman, Raiyan, Nayeem
listAvailableEmployees("Thursday");  
// Output Employees available on Thursday: Fahmid, Raiyan
