import { Button } from "@/shared";
import "@/shared/config/i18n/i18n";
import { Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const MainPage = () => {

	const { t, i18n } = useTranslation();

	const toggleLanguage = useCallback(() => {
		if (i18n.language === "en") {
			i18n.changeLanguage("ru");
		} else {
			i18n.changeLanguage("en");
		}
	}, []);

	return (
		<div className="Main">
			<h1>MAIN PAGE</h1>
			<Suspense fallback="loading...">
				<h3>{t("title")}</h3>
			</Suspense>
      
			<Button color="primary" circle onClick={toggleLanguage}>Button</Button>
		</div>
  
	);
};
