import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span `
    color: #95a5a6;
`;

const NotFound = ({ text }) => (
    < Container >
        <Text>{text}</Text>
    </Container>
);

NotFound.propTypes = {
    text: PropTypes.string.isRequired
}

export default NotFound;