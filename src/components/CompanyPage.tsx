import React from "react";

import useCompanies from "../hooks/useCompanies";
import { removeTrailingSlash } from "../helpers/removeTrailingSlash";
import getCompany from "../helpers/getCompany";
import styled from 'styled-components';

interface StyledInfoSectionProps {
  primary?: boolean;
}

const MainContainer = styled.main`
  color: #575667;
  font-size: 1.2rem;
  margin-block-start: 5rem;
  width: 100%;
  @media (min-width: 1100px) { 
    width: 90%;
    margin-inline: auto;
  }
`;

const LayoutContainer = styled.div`
  @media (min-width: 1300px) { 
    display: flex;
  }
`;

const InfoSection = styled.section<StyledInfoSectionProps>`
  width: max-conent;
  flex-grow: ${props => props.primary ? 1 : 0};
  margin-inline-start: ${props => props.primary ? 'auto' : 'initial'};
  padding-inline: 5rem;
`;

const Heading = styled.h2`
  margin-block-start: 4rem;
  margin-block-end: 2rem;
`;

const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
`;

const CompanyPage = () => {
  const { data, isLoading, isError } = useCompanies();

  if (isLoading) return <div>Loading ...</div>

  if (isError) return <div>500 Error</div>
  const companyName = removeTrailingSlash(window.location.pathname);
  const companyData = getCompany(data, companyName);

  const {
    image,
    address,
    phone,
    email

  } = companyData[0]

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
          <Heading>Nerby places</Heading>
        </InfoSection>
      </LayoutContainer>
    </MainContainer>
  )
}


export default CompanyPage
