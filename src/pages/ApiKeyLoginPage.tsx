import { useState, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "src/contexts/AuthContext";

export default function ApiKeyLoginPage() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const authContext = useAuthContext();
	const [apiKey, setApiKey] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			await authContext.login({ apiKey });

			// Redirect to the intended page or dashboard
			const from = searchParams.get("from") || "/dashboard";
			navigate(from, { replace: true });
		} catch (error) {
			setError(
				error instanceof Error ? error.message : "Error al validar la API Key",
			);
		} finally {
			setIsLoading(false);
		}
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setApiKey(event.target.value);
		if (error) setError(""); // Clear error when user starts typing
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-mocha-base">
			<div className="bg-mocha-surface0 border border-mocha-surface1 w-full max-w-md p-8 rounded-xl shadow-2xl">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-mocha-text mb-2">
						Iniciar Sesión
					</h1>
					<p className="text-mocha-subtext1">
						Ingresa tu clave de API personal
					</p>
				</div>

				{error && (
					<div className="mb-4 p-3 bg-mocha-red/20 border border-mocha-red/30 rounded-lg">
						<p className="text-mocha-red text-sm">{error}</p>
					</div>
				)}

				<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
					<div>
						<label className="block text-mocha-subtext1 text-sm font-medium mb-2">
							API Key
						</label>
						<input
							type="text"
							name="apiKey"
							placeholder="Ingresa tu API Key"
							className="w-full bg-mocha-surface1 border border-mocha-surface2 text-mocha-text p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-mocha-blue focus:border-transparent transition-all font-mono"
							value={apiKey}
							onChange={handleChange}
							required
							disabled={isLoading}
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading || !apiKey.trim()}
						className="w-full bg-mocha-blue hover:bg-mocha-sapphire disabled:bg-mocha-surface2 disabled:text-mocha-subtext0 text-mocha-base font-semibold p-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100"
					>
						{isLoading ? "Validando..." : "Ingresar"}
					</button>
				</form>

				<div className="mt-6 text-center">
					<p className="text-mocha-subtext1 text-sm">
						💡 La API Key se guardará de forma segura en tu navegador
					</p>
				</div>
			</div>
		</div>
	);
}
