import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const LayoutContainer = styled.div`
  background: #fff;
`;

const Ul = styled.ul`
padding-inline: 2.5rem;
padding-block: 2.5rem;
`;

const ListItem = styled.li`
  margin-block: .5rem;
`;

const LinkContainer = styled(Link)`
  background-color:#f8f8fa;
  display: block;
  heigh: 100%;
  &:hover {
    background: #f4f4f5;
    border-radius: 4px;
  }
`;

const CompanyContainer = styled.dl`
  display: flex;
  padding-inline: 2rem;
  padding-block: 2rem;
`;

const Heading = styled.h2`
  padding-inline: 1em;
  padding-block: 1em;
  margin-block-start: 1em;
`;

const CompanyName = styled.dt`
  width: 10%;
`;

const CompanyDescription = styled.dd`
  margin-inline-start: 10rem;
`;

//@ts-ignore
const NearbyPlaces = ({ data }) => {
  const jsx = data.map((company: any) => (
    <ListItem key={company.id}>
      <LinkContainer to={`/${company.name}`} reloadDocument={true}>
        <CompanyContainer>
          <CompanyName>{company.name}</CompanyName>
          <CompanyDescription>
            {`
            ${company.address.number}
            ${company.address.street}
            ${company.address.country},
            ${company.address.city} 
            ${company.address.zip}
          `}
          </CompanyDescription>
        </CompanyContainer>
      </LinkContainer>
    </ListItem>
  ))

  return (
    <LayoutContainer>
      <Heading>Naerby Places</Heading>
      <Ul>
        {jsx}
      </Ul>
    </LayoutContainer>
  )
}

export default NearbyPlaces;