import React from "react";
import styled from 'styled-components';

const ErrorMessage = styled.div`
  font-size: 3rem;
  width: content-width;
  padding: 2rem 4rem;
  background-color: #fff;
  color: tomato;
  text-align: center;
`

const ErrorView = () => (
  <ErrorMessage>
    <p>Error occurred. Contact the page admin</p>
  </ErrorMessage>
)

export default ErrorView;