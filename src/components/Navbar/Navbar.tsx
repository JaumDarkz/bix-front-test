'use client'

import { user } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { NavbarContainer, NavbarOption } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarOption>
        <div>
          <Image
            src={user.photoUrl}
            alt="Foto de Perfil"
            width={24}
            height={24}
          />
        </div>

        <div>{user.name}</div>
      </NavbarOption>
    </NavbarContainer>
  );
};

export default Navbar;
