import { useTheme } from "@/app/providers/themeProviders/useTheme";
import styles from "./ThemeSwitcher.module.scss";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface ThemeProps {
  classnames?: string;
}

export const ThemeSwitcher = ({ classnames }: ThemeProps) => {
	const {theme, toggleTheme} = useTheme();
	return (
		<button className={`${styles.themeBtn} ${classnames}`} onClick={toggleTheme}>
			<FaSun size="16" className={theme === "light" ? styles.active : null} />
			<span className={`${styles.showActive} ${theme === "light" ? styles.themeLight : styles.themeDark}`}>
				<FaArrowLeft />
			</span>
			<FaMoon size="16" className={theme === "dark" ? styles.active : null} />
		</button>
	);
};