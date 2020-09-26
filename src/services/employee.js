const KEYS = {
  employees: "employees",
  employeeID: "employeeID",
};

const departments = [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Human Resource" },
  { id: "4", title: "Information Technology" },
  { id: "5", title: "Accounting" },
];

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) === null) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  return employees.map((employee) => ({
    ...employee,
    department: departments[employee.departmentId - 1].title,
  }));
};

export const generateEmployeeID = () => {
  if (localStorage.getItem(KEYS.employeeID) === null)
    localStorage.setItem(KEYS.employeeID, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeID));
  localStorage.setItem(KEYS.employeeID, (++id).toString());
  return id;
};

export const insertEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeID();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};
