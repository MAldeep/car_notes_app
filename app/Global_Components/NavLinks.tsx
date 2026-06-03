import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
interface NavLinksProps {
  className: string;
}
export default function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={className}>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <Link
          href={"/notes"}
          className="text-gray-950 text-2xl flex items-center gap-1.5 hover:text-gray-600 transition-all duration-500"
        >
          <CgNotes />
          Notes
        </Link>
        <Link
          href={"/analytics"}
          className="text-gray-950 text-2xl flex gap-1.5 items-center hover:text-gray-600 transition-all duration-500"
        >
          <VscGraphLine />
          Analytics
        </Link>
        <Link
          href={"/settings"}
          className="text-gray-950 text-2xl flex items-center gap-1.5 hover:text-gray-600 transition-all duration-500"
        >
          <IoSettingsOutline />
          Settings
        </Link>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-5">
        <Link
          href={"/register"}
          className="w-fit text-2xl bg-blue-900 px-2 py-1 rounded-md text-white hover:bg-blue-950 transition-all duration-500"
        >
          Register
        </Link>
        <Link
          href={"/login"}
          className="w-fit text-2xl bg-blue-900 px-2 py-1 rounded-md text-white hover:bg-blue-950 transition-all duration-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
