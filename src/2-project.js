import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1.5em;
    font-family: Open Sans, sans-serif;
    margin: 5px;
    padding: 0,25px, 1px;
    border: 1px solid palevioletred;
    border-radius: 3px;
`;

const TomatoButton = styled(Button) `
    color: tomato;
    border: 1px solid tomato;
`;

const ReversedButton = props => <Button  {...props} children={props.children.split('').reverse()}/>//props => <Button {...props} children={props.children.split('').reverse()} />

function App() {
    return(
        <div>
           <Button as="a" href="https://styled-components.com/docs/basics#getting-started">Click</Button>
           <Button primary>Click</Button>
           <TomatoButton as={ReversedButton}>Click</TomatoButton> 
        </div>
    );
}

export default App;