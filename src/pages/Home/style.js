import styled from 'styled-components';

export const CoverWrapper = styled.div`
    display: flex;
    max-width: 100%;
    margin: 0 -10px;

    @media (max-width : 992px) {
        flex-direction: column;
        margin: 0;
    }

    .link{
        width: 100%;
        flex-grow: 1;
    }
`;

export const Cover = styled.div`
    flex-grow: 1;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    margin: 10px 0;
    height: 600px;
    margin: 10px;
    display: flex;
    align-items: flex-end;

    @media (max-width : 992px) {
        flex-direction: column;
        height: 160px;
        background-image: url(${props => props.backgroundMobile});
    }

    .logo{
        max-width: 100%;
    }
`;
