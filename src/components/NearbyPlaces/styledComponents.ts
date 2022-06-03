import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  background: #fff;
`;

export const Ul = styled.ul`
padding-inline: 2.5rem;
padding-block: 2.5rem;
`;

export const ListItem = styled.li`
  margin-block: .5rem;
`;

export const LinkContainer = styled(Link)`
  background-color:#f8f8fa;
  display: block;
  heigh: 100%;
  &:hover {
    background: #f4f4f5;
    border-radius: 4px;
  }
`;

export const CompanyContainer = styled.dl`
  display: flex;
  padding-inline: 2rem;
  padding-block: 2rem;
`;

export const Heading = styled.h2`
  padding-inline: 1em;
  padding-block: 1em;
  margin-block-start: 1em;
`;

export const CompanyName = styled.dt`
  width: 10%;
`;

export const CompanyDescription = styled.dd`
  margin-inline-start: 10rem;
`;
