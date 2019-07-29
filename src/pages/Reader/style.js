import styled from 'styled-components';

export const ChapterTitle = styled.h1`
    font-size: 48px;
    color: white;

    @media (max-width: 768px){
        font-size: 24px;
    }
`;

export const ImagesWrapper = styled.section`
    width: 100%;
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 160%;
    position: relative;
    background-color: red;
    margin: 0 auto; 
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
`;
