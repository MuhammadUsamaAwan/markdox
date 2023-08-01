export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type SidebarNavItem = {
  title: string;
  items: NavItem[];
};
