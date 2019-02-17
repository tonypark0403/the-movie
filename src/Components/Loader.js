import React from 'react';
import ReactLoading from "react-loading";
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">
            <ReactLoading type={"spokes"} color="#fff" />
        </span>
    </Container>
);