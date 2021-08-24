import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    font-family: Lucida Sans Unicode;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    background-color: papayawhip;
    padding: 4em;
    border: 1px solid black;
`;

function HelloWorld() {
    return (
      <Wrapper>
        <Title>
            Hello, World!
        </Title>
    </Wrapper>  
    );
}

export default HelloWorld;