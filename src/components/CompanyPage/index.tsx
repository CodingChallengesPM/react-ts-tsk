import React from "react";

import useCompanies from "../../hooks/useCompanies";
import { removeTrailingSlash } from "../../helpers/removeTrailingSlash";
import getCompany from "../../helpers/getCompany";
import getNearbyCompanies from '../../helpers/getNearbyCompanies';

import NearbyPlaces from '../NearbyPlaces';
import LoadView from "../LoadView";
import ErrorView from "../ErrorView";

import {
  MainContainer,
  LayoutContainer,
  InfoSection,
  Heading,
  ImageContainer
} from "./styledComponents";

const CompanyPage = () => {
  const { data, isLoading, isError } = useCompanies();

  if (isLoading) return <LoadView />

  if (isError) return <ErrorView />

  const companyName = removeTrailingSlash(window.location.pathname);
  const companyData = getCompany(data, companyName);

  const {
    image,
    address,
    phone,
    email
  } = companyData[0]

  const nearbyCompanies = getNearbyCompanies(address.city, data);
  return (
    <MainContainer>
      <figure>
        <ImageContainer src={image} alt="dassd" />
      </figure>
      <LayoutContainer>
        <InfoSection>
          <Heading>Address</Heading>
          <address>
            <p>
              {`
                ${address.number}
                ${address.street}
              `}
            </p>
            <p>
              {` 
                ${address.country},
                ${address.city} 
                ${address.zip}
              `}
            </p>
          </address>
        </InfoSection>
        <InfoSection>
          <Heading>Contact</Heading>
          <p>{phone}</p>
          <p>{email}</p>
        </InfoSection>
        <InfoSection primary>
          <NearbyPlaces data={nearbyCompanies} />
        </InfoSection>
      </LayoutContainer>
    </MainContainer>
  )
}


export default CompanyPage
