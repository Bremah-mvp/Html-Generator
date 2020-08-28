const startQ = {
    type: "list",
    name: "role",
    message: "Select an employee you wish to profile?",
    choices: [
        "Manager",
        "Engineer",
        "Intern"    
    ],
    default: "Manager"
};

const employeeQ = [
{ // user full name
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    default: "Firstname Lastname"
},
{ // id
    type: "input",
    name: "id",
    message: "Id?",
    default: "1"
},
{ // email
    type: "input",
    name: "email",
    message: "Email address?",
    default: "email@address.com"
}
];
const managerQ = { 
// office number
type: "input",
name: "officeNumber",
message: "Office number?",
default: "1"
};

const engineerQ = {
// github
    type: "input",
    name: "github",
    message: "Github username?",
    default: "user-name"
};

const internQ = {
// school
    type: "input",
    name: "school",
    message: "school attended/enrolling?",
    default: "UNH"
};

module.exports = { startQ, employeeQ, managerQ, engineerQ, internQ };