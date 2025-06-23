import { useAuthContext } from "@contexts/AuthContext";
import { LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();
	const { apiKey, logout: authLogout } = useAuthContext();

	// Derivar isAuthenticated del estado de apiKey
	const isAuthenticated = !!apiKey;

	function logout() {
		authLogout();
		navigate("/login");
	}

	return (
		<div className="bg-mocha-base text-white p-4">
			<div className="flex justify-between items-center">
				<div className="text-3xl font-bold">Template</div>
				<section className="flex justify-center items-center gap-6">
					{isAuthenticated ? (
						<button
							onClick={logout}
							className="p-2 bg-mocha-red/20 hover:bg-mocha-red/30 text-mocha-red rounded-lg transition-colors"
							title="Cerrar sesión"
						>
							<LogOut className="w-5 h-5" />
						</button>
					) : // No mostrar botones cuando no está autenticado
						null}
				</section>
			</div>
		</div>
	);
}
