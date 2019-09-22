/* 
1. Get - list of all emplowees
2. Get - list of information about one single employee
3. POST - create an employee
4. PATCH - update an employee
5. DELETE -  remove an employee

6. GET - list of all departments
7. Get - list of all information about one single department
8. POST - create a department
9. PATCH - update a department
10. DELETE - a department
*/


// inside routes we call employee by using require.
const employeeList = require('./employee')
const departmentList = require('./department')

module.exports = {
    employeeList
}
,
{
    departmentList
}