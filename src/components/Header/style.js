import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;

    @media (max-width: 992px){
        justify-content: center;
    }
`;

export default Header;
