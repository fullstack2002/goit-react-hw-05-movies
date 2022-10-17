import styled from '@emotion/styled'
import { NavLink } from "react-router-dom"

export const MovieListLink = styled.ul`
  list-style: none;
`;

export const MovieLink = styled(NavLink)`
   padding: 10px;
  text-decoration: none;
  color: black;
  &.active {
    font-size: larger;
    color: #cc0066;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #cc0066;
  }
`;