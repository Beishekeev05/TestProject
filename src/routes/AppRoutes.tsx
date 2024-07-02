import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import BaseLayout from "../layout/BaseLayout";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <BaseLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "about", element: <About /> },
				{ path: "contact", element: <Contact /> },
			],
			errorElement: <ErrorPage />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
