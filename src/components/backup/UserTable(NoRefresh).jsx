import { useState, useEffect } from "react";

export default function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/users'); // our laravel backend API endpoint

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay for loading state
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures this runs once on mount

    if (error) {
        return <p className="text-red-700">Error loading users: {error}</p>; // Display error message if there's an error
    }

    return (
        <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg mt-6 w-[40%]">
            <table className="w-full text-left text-sm text-gray-500">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {loading ? (
                        <tr className="animate-pulse">
                            <td className="px-6 py-4">
                                <div className="h-4 w-24 rounded bg-gray-200"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 w-44 rounded bg-gray-200"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="h-4 w-28 rounded bg-gray-200"></div>
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                                <td className="px-6 py-4">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

