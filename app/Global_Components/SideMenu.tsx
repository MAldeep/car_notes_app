import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";

type OpenProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export default function SideMenu({ isOpen, setIsOpen }: OpenProps) {
  return (
    <div
      className={`fixed top-0 right-0 z-9999 h-full flex flex-col justify-center items-center w-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-5 left-5">
        <IoMdClose className="text-3xl" onClick={() => setIsOpen(false)} />
      </div>
      <NavLinks className="w-full flex flex-col items-center gap-8" />
    </div>
  );
}
