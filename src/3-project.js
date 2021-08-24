import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

function App() {
    return(
        <div>
            <GlobalStyle />
            <Link className="link">Hello, man</Link>
            <br />
            <StyledLink>Oh, man! You are screwed</StyledLink>
        </div>
    );
}

export default App;