"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SideMenu from "./SideMenu";

export default function SideMenuIcon() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex lg:hidden">
        <RxHamburgerMenu
          className="text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
