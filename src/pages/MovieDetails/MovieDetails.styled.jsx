import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  padding: 20px, 20px;
`;

export const MovieInformation = styled.div`
  display: flex;
`;

export const MoviePoster = styled.img`
 width: 300px;
 padding: 20px;
`;

export const MovieInf = styled.div`
  padding: 20 0 20 20;
`;

export const MovieTitle = styled.h1`
  margin: 0;
  color: #3131ac;
`;

export const MovieDescription = styled.h2`
  margin: 0;
  color: #3131ac;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 20px;
`;

export const MovieDetail = styled.h3`
  padding-left: 20px;
`;

export const MovieDetailsLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 10px;
  color: black;
  &.active {
    font-size: larger;
    color: #3131ac;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #3131ac;
  }
`;

export const GoBackLink = styled(NavLink)`
  display: block;
  width: fit-content;
  padding: 10px;
  color: black;
  :hover,
  :focus {
    color: #3131ac;
  }
`;