import { routeConfig } from "@/shared";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route key={path} element={<div className='content-wrap'>{element}</div>} path={path} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;