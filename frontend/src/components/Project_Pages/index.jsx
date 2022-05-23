import React from "react";
import { NavbarContainer, NavbarWrapper, NavItem } from "./NavbarElements";
import Link from "react-scroll/modules/components/Link";
import { AiOutlineRollback } from "react-icons/ai";


const Navbar = (prop) => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavItem >
            <a href={prop.val}
              style={{ fontSize: "1.5em", color: "black" }}>
              <AiOutlineRollback />
            </a>
          </NavItem>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
