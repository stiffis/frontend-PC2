// pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Login from "../components/Login/Login";
import axiosInstance from "../api/axiosInstance";
import { useState } from "react";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  // Evita que un usuario logueado vuelva a la pantalla de login
  if (isAuthenticated) {
    navigate("/dashboard");
    return null;
  }

  // Aquí podrías validar la API key contra el backend
  const handleLogin = async (apiKey: string) => {
    setError(undefined);
    setLoading(true);
    try {
      await axiosInstance.get("/validate-key", { headers: { apikey: apiKey } }); // Cambia "apikey" por el nombre de tu header si es necesario y ajusta la ruta según tu API
      login(apiKey);
      navigate("/dashboard");
    } catch (e: any) {
      setError("Invalid API Key");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Login onLogin={handleLogin} error={error} loading={loading} />
    </div>
  );
}
