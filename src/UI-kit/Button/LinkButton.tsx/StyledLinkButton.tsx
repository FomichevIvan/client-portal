import React from 'react';
import styled from 'styled-components';

const StyledLinkButton = styled.button`
  border: 0;
  border-radius: 0;
  background: none;
  color: #afafaf;
  align-content: space-between;

  font-size: 1em;
  font-weight: bold;
  margin: .5em;
  padding: 0.15em 0.5em;

  cursor: pointer;

  &:hover {
    background: #1dc005;
    color: #ffffff;
    border: 0;
    border-radius: 20px;
  }
`

export default StyledLinkButton;