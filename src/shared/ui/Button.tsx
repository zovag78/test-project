import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, useMemo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  classnames?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "outline" | "dark";
  circle?: boolean;
}

export const Button: FC<ButtonProps> = ({ classnames, color, circle, children, ...otherProps }) => {
	const btnColor = useMemo(() => {
		switch (color) {
		case "primary":
			return styles.primary;
		case "secondary":
			return styles.secondary;
		case "success":
			return styles.success;
		case "danger":
			return styles.danger;
		case "warning":
			return styles.warning;
		case "info":
			return styles.info;
		case "outline":
			return styles.outline;
		case "dark":
			return styles.dark;
		default:
			return styles.primary;
		}
	}, [color]);
	return (
		<button className={`${styles.button} ${btnColor} ${circle ? styles.circle : undefined} ${classnames}`} {...otherProps}>
			{children}
		</button>
	);
};