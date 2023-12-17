import { ThemeSwitcher } from "@/widgets";
import styles from "./Navbar.module.scss";
import { AppLink } from "@/shared";

interface NavbarProps {
  classnames?: string;
}

export const Navbar = ({ classnames }: NavbarProps) => {
	return (
		<div className={`${styles.navbar} ${classnames}`}>
			<AppLink to="/">Main</AppLink>
			<AppLink to="/about">About</AppLink>
			<ThemeSwitcher />
		</div>
	);
};