import React from "react";
import styled from 'styled-components';


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

const CompanyContainer = styled.dl`
  display: flex;
  padding-inline: 2rem;
  padding-block: 2rem;
  background-color:#f8f8fa;
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
    <ListItem>
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