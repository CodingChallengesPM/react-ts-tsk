import React from 'react';

import useCompanies from '../../hooks/useCompanies';
import ErrorView from '../ErrorView'
import LoadView from '../LoadView';

import { CompanyData } from '../../shared/sharedInterfaces';
import {
  SectionContainer, 
  ListItem, 
  LinkContainer,
  CompanyContainer,
  CompanyName,
  CompanyDescription
} from './styledComponents'


function HomePage() {
  const { data, isLoading, isError } = useCompanies();

  if (isLoading) return <LoadView />

  if (isError) return <ErrorView />

  const jsx = data.map((company: CompanyData) => (
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
