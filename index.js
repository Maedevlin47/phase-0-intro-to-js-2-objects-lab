// Write your solution in this file!
const employee = {
    name: "Tyler",
    streetAddress: "6 Boulder lane",
};
function updateEmployeeWithKeyAndValue(employee, name, Mae){
    const updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue[name] = Mae;
    return updateEmployeeWithKeyAndValue;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Sam){
    //const destructivelyUpdateEmployeeWithKeyAndValue = (employee, "name", "Sam");
    employee[name] = Sam;
    return employee;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");

newEmployee;

function deleteFromEmployeeByKey(employee, name, Tyler){
    const deleteFromEmployeeByKey = {...updateEmployeeWithKeyAndValue};
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;

}
function destructivelyDeleteFromEmployeeByKey(employee, name, Tyler){
   delete employee.name;
   return employee;

}