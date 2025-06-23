import { ApiKeyLoginRequest } from "@interfaces/auth/ApiKeyLoginRequest";
import Api from "@services/api";

// Simple interface for API key validation response
interface ApiKeyValidationResponse {
	success: boolean;
	message?: string;
}

export async function validateApiKey(
	request: ApiKeyLoginRequest,
): Promise<{ data: ApiKeyValidationResponse }> {
	const api = await Api.getInstance();

	// Set the API key temporarily for validation
	api.apiKey = request.apiKey;

	try {
		// TODO: Replace with your actual validation endpoint
		// This could be any endpoint that requires authentication
		const response = await api.get<void, ApiKeyValidationResponse>({
			url: "/api/validate", // or any endpoint that validates the API key
		});

		return {
			data: {
				success: true,
				message: "API Key válida",
			},
		};
	} catch (error) {
		// Reset API key on failure
		api.apiKey = null;
		throw new Error("API Key inválida");
	}
}
