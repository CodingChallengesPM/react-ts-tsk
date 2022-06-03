import styled from 'styled-components';
import { Link } from "react-router-dom";
import {StyleProps} from '../../shared/sharedInterfaces'

export const SectionContainer = styled.section`
  width: 100%;
  font-size: 1.2rem;
@media (min-width: 1100px) { 
  width: 90%;
  margin-inline: auto;
}
`;

export const ListItem = styled.li`
  margin-block: .5rem;
`;

export const LinkContainer = styled(Link)`
  background: #fff;
  display: block;
  heigh: 100%;
  &:hover {
    background: #f4f4f5;
    border-radius: 4px;
  }
`;

export const CompanyContainer = styled.dl<StyleProps>`
padding-inline: 2rem;
padding-block: 2rem;
background-color: ${props => props.primary ? "#fff" : "inherit"};
font-size: ${props => props.primary ? "1.5rem" : "1rem"};
color: ${props => props.primary ? "#b41d76" : "#575667"};
text-transform: ${props => props.primary ? "uppercase" : "inherit"};
font-weight: ${props => props.primary ? "bold" : "normal"};
  @media (min-width: 550px) {
    display: flex;
    flex-direction: row;
  }
`;

export const CompanyName = styled.dt`
  width: 10%;
`;

export const CompanyDescription = styled.dd<StyleProps>`
  margin-inline-start: 10rem;
`;