import React from "react";
import LogoSvg from "../assets/LogoSvg";
import styled from 'styled-components';

const LogoContainer = styled.figure`
  display: block;
  background: #fff;
  text-align: center;
  padding-block: 4rem;
  margin-block-end: 6rem;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px -20px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
    </LogoContainer>
  )
}

export default Logo;