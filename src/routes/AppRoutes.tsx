import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";

const AppRoutes: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "about", element: <About /> },
				{ path: "contact", element: <Contact /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
