import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './assets/css/font.css';

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred; 
`;

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Wrapper>
                    <Title>Welcome to react boilerplate</Title>
            </Wrapper>
        );
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));