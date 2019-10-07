/* 
1. Get - list of all accounts
2. Get - list of information about one single account
3. POST - create an account
4. PATCH - update an account
5. DELETE -  remove an account

6. GET - list of all departments
7. Get - list of all information about one single department
8. POST - create a department
9. PATCH - update a department
10. DELETE - a department
*/


// inside routes we call account by using require.
const accountList = require('./account')
const departmentList = require('./department')

module.exports = {
    accountList
}
,
{
    departmentList
}