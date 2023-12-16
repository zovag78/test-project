import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { AppLink, Button } from "@/shared";

interface SidebarProps {
  classnames?: string;
}

export const Sidebar = ({ classnames }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : null } ${classnames}`}>
      <Button onClick={() => setIsCollapsed(!isCollapsed)} classnames={styles.collapseBtn} color="primary" circle>Toggle</Button>

    </div>
  )
};