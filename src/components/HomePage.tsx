import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


import useCompanies from '../hooks/useCompanies';

interface ListContent {
  name: string;
  id: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: string;
}

interface StyledDlProps {
  primary?: boolean
}

const SectionContainer = styled.section`
  width: 100%;
  font-size: 1.2rem;
@media (min-width: 1100px) { 
  width: 90%;
  margin-inline: auto;
}
`;

const ListItem = styled.li`
  margin-block: .5rem;
`;

const LinkContainer = styled(Link)`
  background: #fff;
  display: block;
  heigh: 100%;
  &:hover {
    background: #f4f4f5;
    border-radius: 4px;
  }
`;

const CompanyContainer = styled.dl<StyledDlProps>`
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

const CompanyName = styled.dt`
  width: 10%;
`;
const CompanyDescription = styled.dd<StyledDlProps>`
  margin-inline-start: 10rem;
`;

function HomePage() {
  const { data, isLoading, isError } = useCompanies();

  if (isLoading) return <div>Loading ...</div>

  if (isError) return <div>500 Error</div>

  console.log(data)
  const jsx = data.map((company: ListContent) => (
    <ListItem key={company.id}>
      <LinkContainer to={`/${company.name}`}>
        <CompanyContainer>
          <CompanyName>{company.name}</CompanyName>
          <CompanyDescription>{company.description}</CompanyDescription>
        </CompanyContainer>
      </LinkContainer>
    </ListItem>

  ))
  return <SectionContainer>
    <CompanyContainer primary>
      <CompanyName>name</CompanyName>
      <CompanyDescription primary>description</CompanyDescription>
    </CompanyContainer>
    <ul>
      {jsx}
    </ul>
  </SectionContainer>
}

export default HomePage;
