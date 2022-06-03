import React from "react";
import styled from 'styled-components';

const LoadContainer = styled.div`
  font-size: 1.5rem;
  width: 30%;
  margin-inline: auto;
  padding: 2rem 4rem;
  background-color: #fff;
  color: #aa0565;
  text-align: center;
`
const LoadView = () => (
  <LoadContainer>
    <p>Loading ...</p>
  </LoadContainer>
)

export default LoadView;