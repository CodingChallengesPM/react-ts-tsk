import styled from 'styled-components';
import { StyleProps } from "../../shared/sharedInterfaces";

export const MainContainer = styled.main`
  color: #575667;
  font-size: 1.2rem;
  margin-block-start: 5rem;
  width: 100%;
  @media (min-width: 1100px) { 
    width: 90%;
    margin-inline: auto;
  }
`;

export const LayoutContainer = styled.div`
  @media (min-width: 1300px) { 
    display: flex;
  }
`;

export const InfoSection = styled.section<StyleProps>`
  width: max-conent;
  flex-grow: ${props => props.primary ? 1 : 0};
  margin-inline-start: ${props => props.primary ? 'auto' : 'initial'};
  padding-inline: 5rem;
`;

export const Heading = styled.h2<StyleProps>`
  margin-block-start: 4rem;
  margin-block-end: 2rem;
`;

export const ImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
`;
