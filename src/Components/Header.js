import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { URL } from 'Common/Constants'

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
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
    border-bottom: 3px solid 
        ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header className="nav">
        <List>
            <Item current={pathname === URL.HOME}>
                <SLink to={URL.HOME}>Movies</SLink>
            </Item>
            <Item current={pathname === URL.TV}>
                <SLink to={URL.TV}>TV</SLink>
            </Item>
            <Item current={pathname === URL.SEARCH}>
                <SLink to={URL.SEARCH}>Search</SLink>
            </Item>
        </List>
    </Header>
));