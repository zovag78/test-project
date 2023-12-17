import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom"; 
import { ThemeProvider } from "./app/providers/themeProviders/ThemeProvider";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";


render (
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>, 

	document.getElementById("root")
);

