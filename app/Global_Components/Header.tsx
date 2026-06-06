import NavLinks from "./NavLinks";
import Link from "next/link";
import SideMenuIcon from "./SideMenuIcon";

export default function Header() {
  return (
    <header className="w-full bg-gray-50 px-3 lg:px-10 py-5 flex justify-between border-b-2 border-b-gray-200 items-center">
      <Link href={"/"} className="text-gray-800 font-bold text-4xl">
        Car Notes
      </Link>
      <NavLinks className="w-2/3 hidden lg:flex lg:justify-between gap-5" />
      <SideMenuIcon />
    </header>
  );
}
