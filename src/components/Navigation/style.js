import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    flex-grow: 1;
    padding-left: 60px;
    align-items: center;

    @media (max-width: 992px){
        display: none;
    }
`;

export const NavItem = styled.nav`
    margin: 0 20px;
    color: #FFF;

    &:first-child{
        margin-left: 0;
    }

    &:last-child{
        margin-right: 0;
    }
`;
