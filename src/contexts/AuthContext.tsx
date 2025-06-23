import { useStorageState } from "@hooks/useStorageState";
import { ApiKeyLoginRequest } from "@interfaces/auth/ApiKeyLoginRequest";
import Api from "@services/api";
import { validateApiKey } from "@services/auth/validateApiKey";
import { createContext, ReactNode, useContext } from "react";

interface AuthContextType {
	login: (apiKeyRequest: ApiKeyLoginRequest) => Promise<void>;
	logout: () => void;
	apiKey?: string | null;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function loginHandler(
	apiKeyRequest: ApiKeyLoginRequest,
	setApiKey: (value: string) => void,
) {
	// Validate the API key with the backend
	const response = await validateApiKey(apiKeyRequest);
	
	// If validation is successful, store the API key
	if (response.data.success) {
		setApiKey(apiKeyRequest.apiKey);
	} else {
		throw new Error("API Key inválida");
	}
}

export function AuthProvider(props: { children: ReactNode }) {
	const [[isLoading, apiKey], setApiKey] = useStorageState("apiKey");

	// Set the API key in the API instance when it's available
	if (apiKey) {
		Api.getInstance().then((api) => {
			api.apiKey = apiKey;
		});
	}

	return (
		<AuthContext.Provider
			value={{
				login: (apiKeyRequest) => loginHandler(apiKeyRequest, setApiKey),
				logout: () => {
					setApiKey(null);
					// Also clear the API key from the API instance
					Api.getInstance().then((api) => {
						api.apiKey = null;
					});
				},
				apiKey,
				isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error("useAuthContext must be used within a AuthProvider");
	return context;
}
