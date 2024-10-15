import { user } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { NavbarContainer, NavbarOption, HamburgerMenu } from "./Navbar.styles";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleSidebar}>☰</HamburgerMenu>
      <NavbarOption>
        <div>
          <Image src={user.photoUrl} alt="Foto de Perfil" width={24} height={24} />
        </div>
        <div>{user.name}</div>
      </NavbarOption>
    </NavbarContainer>
  );
};

export default Navbar;
