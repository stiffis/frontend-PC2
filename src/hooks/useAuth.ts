//hooks/useAuth.ts
import { useAuthContext } from "../context/AuthContext";

// Custom hook para acceder fácilmente al contexto de autenticación
export function useAuth() {
  return useAuthContext();
}
