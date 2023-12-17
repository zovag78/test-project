import "./styles/index.scss";

import { useTheme } from "@/app/providers/themeProviders/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar, Sidebar } from "@/widgets";

export const App = () => {
	const {theme } = useTheme();
  
	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<div className='page-wrapper'>
				<Sidebar />
				<AppRouter />
			</div>
      
		</div>
  
	);
};