const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function registerEmployee(){
    r1.question("Enter employee name: ", (name) => {
        r1.question("Enter Date of Birth (YYYY-MM-DD): ", (dob) => {
            r1.question("Enter Joining Date: ", (joiningDate) => {
                r1.question("Enter Salary: ", (salary) => {
                    if (!isValidDate(dob) || !isValidDate(joiningDate) || !isValidSalary(salary)) {
                        console.log("Invalid Input, Please Try Again");
                        r1.close();
                        return;
                    }
                })
            })
        })
    })
}