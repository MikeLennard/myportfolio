import NavItem from './NavItem';

const NavContainer = ({ items, currentPath }) => (
  <header className="sticky top-0 z-50 w-full border-b border-grayx-200 bg-white">
    <nav className="flex h-16 items-center justify-between px-4">
      <ul className="flex items-center gap-12">
        {items.map((item) => (
          <NavItem
            key={item.id}
            href={item.href}
            name={item.name}
            badge={item.badge}
            isActive={currentPath === item.href}
          />
        ))}
      </ul>
    </nav>
  </header>
);

export default NavContainer;
