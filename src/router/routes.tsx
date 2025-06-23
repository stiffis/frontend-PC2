import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { ProtectedRoute } from "./ProtectedRoute";
import ApiKeyLoginPage from "@pages/ApiKeyLoginPage";
import DashboardPage from "@pages/DashboardPage";
import NotFoundPage from "@pages/NotFoundPage";
// TODO: Import your custom pages here
// import CustomPage1 from "@pages/CustomPage1";
// import CustomPage2 from "@pages/CustomPage2";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			// Public routes
			{
				path: "login",
				element: <ApiKeyLoginPage />,
			},
			// Protected routes
			{
				path: "/",
				element: <ProtectedRoute />,
				children: [
					{
						index: true, // This makes it the default route when user goes to "/"
						element: <DashboardPage />,
					},
					{
						path: "dashboard",
						element: <DashboardPage />,
					},
					// TODO: Add your custom routes here
					// {
					//   path: "custom-page-2",
					//   element: <CustomPage2 />
					// },
				],
			},
			// 404 route
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
