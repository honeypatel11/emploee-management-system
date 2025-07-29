import { useEffect, useState } from 'react';
import EmployeeTable from '../components/Employeetable';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchEmp, setSearchEmp] = useState([]);
    const [search, setSearch] = useState({ name: "", department: "" });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setSearchEmp(data);
    }, []);

     useEffect(() => {
        filterEmployees(search);
        
    }, [search, searchEmp]);
    

    const employeeDelete = (id) => {
        const updatedEmployee = searchEmp.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployee);
        setSearchEmp(updatedEmployee);
        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Employee Deleted Successfully!");
    };

    const handleChange = (e) => {
        setSearch({ ...search, [e.target.id]: e.target.value });
    };

    const handleSearch = (e) => {
        const updatedSearch = { ...search, [e.target.id]: e.target.value };
        setSearch(updatedSearch);
        
    };

    const filterEmployees = ({name, department}) => {
        let filtered = [...searchEmp];
        
        if (department.trim() !== "") {
            filtered = filtered.filter(emp =>emp.department===department);
            
            
           
        }

        if (name.trim() !== "") {
          filtered = filtered.filter(emp =>
                emp.name.toLowerCase().includes(name.toLowerCase())
            );
            
        }
        setEmployees(filtered);
        
       
    };


    return (
        <section className="pt-[93px] bg-[#f9fafb] min-h-screen">
            <div className="container mx-auto px-4">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Employees Details</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-3 w-full md:w-auto">
                        <select
                            onChange={handleChange}
                            value={search.department}
                            id="department"
                            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 px-4 py-2"
                        >
                            <option value="">All Departments</option>
                            <option value="Designing">Designing</option>
                            <option value="Development">Development</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Search Name"
                            value={search.name}
                            id="name"
                            onChange={handleSearch}
                            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-teal-500 focus:border-teal-500 px-4 py-2 w-full"
                        />

                        <button
                            type="button"
                            onClick={() => navigate("/add-employee")}
                            className="w-full text-white bg-teal-700 hover:bg-teal-700 font-medium rounded-md text-sm px-3 py-2 flex items-center gap-2 transition"
                        >
                            Add Employee
                        </button>


                    </div>
                </div>

                <div className="overflow-x-auto">
                    <EmployeeTable
                        employees={employees}
                        setEmployees={setEmployees}
                        employeeDelete={employeeDelete}
                    />
                </div>
            </div>
        </section>
    );
};

export default Employees;
