/*import { useState } from "react";

interface LoginProps {
  onLogin: (apiKey: string) => void;
  error?: string;
  loading?: boolean;
}

export default function Login({ onLogin, error, loading }: LoginProps) {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onLogin(apiKey.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-32 p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
      <input
        type="text"
        placeholder="Enter your API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        autoFocus
      />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}*/
//components/Login/Login.tsx
import { useState } from "react";

interface LoginProps {
  onLogin: (apiKey: string) => void;
  error?: string;
  loading?: boolean;
}

export default function Login({ onLogin, error, loading }: LoginProps) {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onLogin(apiKey.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-32 p-6 bg-mocha-base text-mocha-text shadow rounded-xl space-y-4 border border-mocha-surface2"
    >
      <h2 className="text-2xl font-bold mb-2 text-center text-mocha-mauve">
        Login
      </h2>
      <input
        type="text"
        placeholder="Enter your API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="w-full px-3 py-2 bg-mocha-surface0 text-mocha-text border border-mocha-surface2 rounded focus:outline-none focus:ring-2 focus:ring-mocha-blue"
        autoFocus
      />
      {error && <div className="text-mocha-red text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-mocha-blue text-mocha-base py-2 rounded hover:bg-mocha-sapphire transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
