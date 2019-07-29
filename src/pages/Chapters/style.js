import styled from 'styled-components';

export const Chapter = styled.article`
    display: flex;
    width: 100%;
    border: 1px solid white;
    position: relative;
    margin: 20px 0;

    .cover{
        width: 80px;
        height: 80px;
        background-color: red;
        flex-shrink: 0;
    }

    .number{
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 20px;
        color: aliceblue;

        &:before{
            content: '#'
        }
    }

    .title{
        font-size: 16px;
        color: white;
        padding: 10px;
        padding-right: 60px;
        font-weight: normal;
        margin: 0;
    }
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
`;

export const Logo = styled.img`
    width:100%;
    height: 100%;
    object-fit: contain;
`;
