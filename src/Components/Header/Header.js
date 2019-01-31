import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    // &:not(:last-child) {
    //     margin-right: 10px;
    // }
`;

//const Link = styled.a``; // Link는 이렇게 안하고 react-router이용
const SLink = styled(Link)`
    height: 50px;
    //display: block; // 이렇게 해야 빈공간 눌러도 동작
    display: flex;
    align-items: center;
    justify-content: center;
`; // built-in component에 경우

export default () => (
    <Header className="nav">
        <List>
            <Item>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search ">Search</SLink>
            </Item>
        </List>
    </Header>
)