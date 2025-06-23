import { useAuthContext } from "src/contexts/AuthContext";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
	const { apiKey } = useAuthContext();

	return (
		<div className="min-h-screen bg-mocha-base text-mocha-text">
			{/* Header */}
			<header className="bg-mocha-surface0 border-b border-mocha-surface1 px-6 py-4">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-2xl font-bold text-mocha-text">Dashboard</h1>
						<p className="text-sm text-mocha-subtext1">
							Bienvenido a tu panel de control
						</p>
					</div>
					<div className="text-right">
						<p className="text-sm text-mocha-subtext1">API Key</p>
						<p className="text-xs font-mono text-mocha-green">
							{apiKey ? `${apiKey.substring(0, 8)}...` : "No disponible"}
						</p>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="p-6">
				{/* Welcome Section */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-mocha-text mb-2">
						¡Bienvenido!
					</h2>
					<p className="text-lg text-mocha-subtext1">
						Esta es tu plantilla base. Personaliza este dashboard según tus
						necesidades.
					</p>
				</div>

				{/* Quick Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{/* API Status */}
					<div className="bg-mocha-surface0 border border-mocha-surface1 rounded-xl p-6">
						<div className="flex items-center gap-3 mb-4">
							<div className="p-3 bg-mocha-green/20 rounded-lg">
								<Activity className="w-6 h-6 text-mocha-green" />
							</div>
							<h3 className="font-semibold text-mocha-text">Estado de API</h3>
						</div>
						<p className="text-2xl font-bold text-mocha-green mb-2">
							Conectado
						</p>
						<p className="text-sm text-mocha-subtext0">
							API Key válida y funcionando
						</p>
					</div>
				</div>

				{/* Instructions */}
				<div className="bg-mocha-surface0 border border-mocha-surface1 rounded-xl p-6 mb-8">
					<h3 className="text-xl font-semibold text-mocha-text mb-4">
						🚀 Instrucciones para personalizar
					</h3>
					<div className="space-y-3 text-mocha-subtext1">
						<p>
							<strong className="text-mocha-text">1. Backend URL:</strong>{" "}
							Actualiza la URL en{" "}
							<code className="bg-mocha-surface1 px-2 py-1 rounded text-mocha-green">
								src/services/api.ts
							</code>
						</p>
						<p>
							<strong className="text-mocha-text">2. Endpoints:</strong>{" "}
							Modifica{" "}
							<code className="bg-mocha-surface1 px-2 py-1 rounded text-mocha-green">
								src/services/auth/validateApiKey.ts
							</code>{" "}
							para tu endpoint de validación
						</p>
						<p>
							<strong className="text-mocha-text">3. Rutas:</strong> Añade tus
							páginas personalizadas en{" "}
							<code className="bg-mocha-surface1 px-2 py-1 rounded text-mocha-green">
								src/router/routes.tsx
							</code>
						</p>
						<p>
							<strong className="text-mocha-text">4. Servicios:</strong> Crea
							tus servicios de API en{" "}
							<code className="bg-mocha-surface1 px-2 py-1 rounded text-mocha-green">
								src/services/
							</code>
						</p>
						<p>
							<strong className="text-mocha-text">5. Interfaces:</strong> Define
							tus tipos en{" "}
							<code className="bg-mocha-surface1 px-2 py-1 rounded text-mocha-green">
								src/interfaces/
							</code>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
