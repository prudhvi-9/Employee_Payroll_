//To set the EVENT listner in salary range

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

//
class EmployeePayrollData {

    //getter and setter method

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this_department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        return this._salary = salary;
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocalDateString("en-US", options);
        return " name = '" + this.name + ", gender = '" + this.gender +
            ", profilePic = '" + this.profilePic + ", department = " + this.department +
            ", Salary = " + this.salary + "startDate = " + empDate + ", note = " + this.note;

    }
}
function save() {
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.name = getInputValueById("#name");
    employeePayrollData.profilePic = getSelectedValues("[name = profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name = gender]").pop();
    employeePayrollData.department = getSelectedValues("[name = department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.notes = getInputValueById("#notes");
    employeePayrollData.startDate = new Date(getInputValueById("#year"), getInputValueById("#month"), getInputValueById("#day"));
    alert(employeePayrollData.toString());
}

let getSelectedValues = (property) => {
    let allItems = document.querySelectorAll(property);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}

let getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}