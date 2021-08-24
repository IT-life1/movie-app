import styled from 'styled-components';
import React from 'react';
import { GlobalStyle } from './GlobalStyle';


const StyledCounter = styled.section`
    position: relative;
    text-align: center;
    width: 500px;
    height: 500px;
    border: 10px solid black;
    background: papayawhip;
    margin: 0 auto;
`;

const Paragraph = styled.p`
    color: palevioletred;
    font-size: 1.5em;
    font-family: Lucida Console, monospace;
    border: 1px solid black;
`;

const IncrementButton = styled.button`
    position: absolute;
    background: red;
    color: white;
    padding: 3em;
    margin: 3px;
    bottom: 20px;
    left: 20px;
`;

const DecrementButton = styled.button`
    position: absolute;
    background: lightblue;
    color: white;
    padding: 3em;
    bottom: 20px;
    left: 380px;
`;

export default class Counter extends React.Component {
    state = {count: 0};

    incrementFunc = () => this.setState({count: this.state.count + 1});
    decrementFunc = () => this.setState({count: this.state.count - 1});


    render() {
        return(
            <div className="center">
                <GlobalStyle />
                    <StyledCounter>
                        <Paragraph>{this.state.count}</Paragraph>
                        <Paragraph>This is my first project!</Paragraph>
                        <IncrementButton onClick={this.incrementFunc}>+</IncrementButton>
                        <DecrementButton onClick={this.decrementFunc}>-</DecrementButton>
                    </StyledCounter>
            </div>
        );
    }
}