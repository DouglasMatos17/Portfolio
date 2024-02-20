// ContainerWrapper, Content, ImageDiv, ContentDiv, Title, Resume, TechnologyDiv

import styled from "styled-components";

export const ContainerWrapper = styled.article`
    display: flex;
    min-height: 500px;
    max-width: 1200px;
    background-color: ${(props)=>props.theme.darkMode ? props.theme.temacores.color.dark.secun : props.theme.temacores.color.light.secun};
    border-radius: 10px;
    margin: 20px;
    color: ${(props)=>props.theme.darkMode? props.theme.temacores.color.dark.colorFont:props.theme.temacores.color.light.colorFont};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.200);
    transition: color .5s;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
`;

export const ImageDiv = styled.div`
    width: 50%;
    border-radius: 10px 0px 0px 10px;
    background-image: url(./testeteste.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const ContentDiv = styled.div`
    width: 50%;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    padding: 25px;`;

export const Resume = styled.p`
    padding: 15px;`;

export const TechnologyDiv = styled.div``;