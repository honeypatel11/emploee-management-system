import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";

const EmployeeTable = ({ employees, employeeDelete }) => {
    const handleDelete = (id) => {
        employeeDelete(id);
    };

    return (
        <div className="w-full overflow-x-auto mt-5">
            <table className="min-w-[640px] w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-teal-700">
                    <tr>
                        <th scope="col" className="px-4 py-3">Number</th>
                        <th scope="col" className="px-4 py-3">Employee Name</th>
                        <th scope="col" className="px-4 py-3">Salary</th>
                        <th scope="col" className="px-4 py-3">Department</th>
                        <th scope="col" className="px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="py-8 text-center">
                                <img
                                    src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/hIe8Ns0ZnU.png"
                                    alt="No data"
                                    className="mx-auto w-80 h-80"
                                />
                              
                            </td>
                        </tr>
                    ) : (
                        employees.map((emp, idx) => (
                            <tr key={emp.id} className="bg-white border-b border-l border-r border-gray-300">
                                <td className="px-4 py-4 text-gray-900 whitespace-nowrap">{idx + 1}</td>
                                <td className="px-4 py-4 text-gray-900">{emp.name}</td>
                                <td className="px-4 py-4 text-gray-900">{Number(emp.salary).toLocaleString()}</td>
                                <td className="px-4 py-4 text-gray-900">
                                    {emp.department}
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-4">
                                        <Link to={`/edit-employee/${emp.id}`} className="text-base text-green-600">
                                            <BsPencilSquare />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(emp.id)}
                                            className="text-base text-red-600"
                                        >
                                            <IoTrashBin />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default EmployeeTable;
