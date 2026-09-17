const NavLink = ({href, name, isActive}) => {
  return (
    <a
      href={href}
      className={isActive ? 'text-blue-500 font-bold active' : ''}
    >
      {name}
    </a>
  )
}

export default NavLink