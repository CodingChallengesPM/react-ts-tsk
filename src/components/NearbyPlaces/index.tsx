import React from "react";

import {
  LayoutContainer,
  Ul,
  ListItem,
  LinkContainer,
  CompanyContainer,
  Heading,
  CompanyName,
  CompanyDescription
} from "./styledComponents";

import { CompanyData } from "../../shared/sharedInterfaces";


interface NearbyPlacesProps {
  data: CompanyData[]
}

const NearbyPlaces = ({ data }: NearbyPlacesProps) => {
  const jsx = data.map((company: CompanyData) => (
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