import { NavLink as RouterNavLink } from 'react-router-dom';

/**
 * NavLink component
 * Uses props and React Router for client-side navigation without reloads
 */
const NavLink = ({ href, name }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-white bg-indigo-600/30 border border-indigo-500/50 shadow-md shadow-indigo-500/20'
            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
        }`
      }
    >
      {name}
    </RouterNavLink>
  );
};

export default NavLink;