import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={`
            ${link.href === currentPath ? "text-zinc-900" : "text-zinc-500"}
            hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
