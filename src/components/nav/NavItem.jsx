import NavLink from './NavLink'

const NavItem = ({href, name, isActive}) => {
  return (
    <li className="flex items-center">
      <NavLink href={href} name={name} isActive={isActive} />
    </li>
  )
}

export default NavItem