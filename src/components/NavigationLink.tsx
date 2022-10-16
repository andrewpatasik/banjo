import { NavLink } from "react-router-dom";

interface NavLinkProp {
  to: string;
  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
}

const NavigationLink = (prop: NavLinkProp) => {
  return (
    <NavLink to={prop.to}>
      {({ isActive }) => (isActive ? prop.activeIcon : prop.inactiveIcon)}
    </NavLink>
  );
};

export default NavigationLink;
