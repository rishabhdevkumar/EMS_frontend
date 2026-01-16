import React, { useEffect, useState } from "react";
import AdminHeader from "../component/AdminHeader";
import Sidebar from "../component/Sidebar";
import {
  getAllDepartments,
  deleteDepartment,
  addDepartment,
} from "../services/DepartmentService";

function Department() {
  const [isOpen, setIsOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");

  const fetchDepartments = async () => {
    try {
      const res = await getAllDepartments();
      setDepartments(res.data);
    } catch (error) {
      console.error("Failed to fetch departments", error);
    }
  };

  const handleAddDepartment = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Department name is required");
      return;
    }
    try {
      await addDepartment({ name, description });
      setShowModal(false);
      setname("");
      setDescription("");
      fetchDepartments();
    } catch (error) {
      alert("Failed to add department");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?"))
      return;
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-sky-100 overflow-x-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full md:ml-60 transition-all duration-300">
        <AdminHeader setIsOpen={setIsOpen} />

        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Manage Departments
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <input
              type="text"
              placeholder="Search by department name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 bg-white px-4 py-2 rounded-md w-full sm:w-1/3 text-gray-700"
            />

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="bg-teal-600 text-white font-bold px-4 py-2 rounded-md hover:bg-teal-700 w-full sm:w-auto mt-2 sm:mt-0"
            >
              Add New Department
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-black rounded-lg shadow">
              <thead className="text-center text-sm font-semibold border-b border-gray-300">
                <tr>
                  <th className="py-3 px-2">SL</th>
                  <th className="py-3 px-4">Department Name</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-center text-sm">
                {filteredDepartments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-4 text-gray-500">
                      No departments found
                    </td>
                  </tr>
                ) : (
                  filteredDepartments.map((dept, index) => (
                    <tr key={dept._id} className="border-b border-gray-300">
                      <td className="py-3 px-2">{index + 1}</td>
                      <td className="py-3 px-4">{dept.name}</td>
                      <td className="py-3 px-4">{dept.description}</td>
                      <td className="py-3 px-4 space-x-2 whitespace-nowrap">
                        <button className="bg-green-400 px-4 py-1 rounded text-xs font-bold">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(dept._id)}
                          className="bg-red-400 px-4 py-1 rounded text-xs font-bold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <h3 className="text-xl font-bold mb-4 text-center">
              Add New Department
            </h3>

            <form onSubmit={handleAddDepartment} className="space-y-4">
              <input
                type="text"
                placeholder="Department Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                className="w-full border px-4 py-2 rounded"
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border px-4 py-2 rounded resize-none"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-400 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded font-bold"
                >
                  Save
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 font-bold text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Department;
