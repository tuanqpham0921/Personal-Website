import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  width: 10%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5rem;
  position: fixed;
  z-index: 999;
`;

export const NavbarWrapper = styled.div`
  width: 80px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  border: 3px;
  border-radius: 50px;
  background-color: ##FFFFFF;
  padding-left: auto;
`;

export const NavItem = styled.div`
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
    transition: transform .1s;
  }
`;
