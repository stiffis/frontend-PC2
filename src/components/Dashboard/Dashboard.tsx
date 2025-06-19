//components/Dashboard/Dashboard.tsx
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { logout, apiKey } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">
        ¡Bienvenido! Tu API Key:{" "}
        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
          {apiKey}
        </span>
      </p>
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
