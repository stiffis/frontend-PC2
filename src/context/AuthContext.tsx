//context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getApiKey, setApiKey, removeApiKey } from "../utils/storage";

interface AuthContextType {
  apiKey: string | null;
  login: (key: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKeyState] = useState<string | null>(getApiKey());

  useEffect(() => {
    setApiKeyState(getApiKey());
  }, []);

  const login = (key: string) => {
    setApiKey(key);
    setApiKeyState(key);
  };

  const logout = () => {
    removeApiKey();
    setApiKeyState(null);
  };

  return (
    <AuthContext.Provider
      value={{ apiKey, login, logout, isAuthenticated: !!apiKey }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
}
