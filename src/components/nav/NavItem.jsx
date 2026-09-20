import NavLink from './NavLink';

const NavItem = ({ href, name, onClick }) => {
  return (
    <li className="flex items-center" onClick={onClick}>
      <NavLink href={href} name={name} />
    </li>
  );
};

export default NavItem;