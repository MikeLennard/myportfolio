import { useState, useEffect } from "react";

export default function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('/api/users');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setUsers(data);

        } catch (err) {
            setError(err.message);
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Empty dependency array ensures this runs once on mount

    if (error) {
        return (
            <div className="mt-6">
                <p className="text-red-700 mb-2">Error loading users: {error}</p>
                <button
                    onClick={fetchUsers}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="mt-6 w-[40%]">
            <div className="flex justify-end mb-2">
                <button
                    onClick={fetchUsers}
                    disabled={loading}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer"
                >
                    {loading ? 'Refreshing...' : 'Refresh'}
                </button>
            </div>
            <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone Number</th>
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
                                <td className="px-6 py-4">
                                    <div className="h-4 w-32 rounded bg-gray-200"></div>
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">{user.phone_number || user.phone || 'N/A'}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


