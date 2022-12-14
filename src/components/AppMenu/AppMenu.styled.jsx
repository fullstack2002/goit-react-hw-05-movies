import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #7676d9; 
  height: 40px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px;
  color: black;
  &.active {
    font-size: larger;
    color: #3131ac;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #000000;
  }
`;