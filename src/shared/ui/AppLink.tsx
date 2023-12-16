import { Link, LinkProps } from "react-router-dom";
import styles from './AppLink.module.scss';
import { FC } from "react";

interface AppLinkProps extends LinkProps {
  classnames?: string;
}

export const AppLink: FC<AppLinkProps> = ({ classnames, to, children, ...otherProps }) => {
  return (
    <Link to={to} className={`${styles.link} ${classnames}`} {...otherProps}>
      {children}
    </Link>
  )
};