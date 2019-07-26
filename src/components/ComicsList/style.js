import styled from 'styled-components';

export const CoverWrapper = styled.div`
    display: flex;
    max-width: 100%;

    @media (max-width : 992px) {
        flex-direction: column;
        height: 800px;
    }
`;

export const Cover = styled.div`
    flex-grow: 1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;
