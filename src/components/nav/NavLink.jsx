import { NavLink as RouterNavLink } from 'react-router-dom';

/**
 * NavLink component
 * Uses props and React Router for client-side navigation without reloads
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
const NavLink = ({ href, name }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-[#f1f5f0] bg-[#2B5748] border border-[#9CB080]/40 shadow-md shadow-[#2B5748]/40 font-semibold'
            : 'text-[#CBD5C0] hover:text-white hover:bg-[#2B5748]/40'
        }`
      }
    >
      {name}
    </RouterNavLink>
  );
};

export default NavLink;