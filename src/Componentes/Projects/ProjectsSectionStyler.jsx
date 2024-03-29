import styled from "styled-components";

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.darkMode ? props.theme.temacores.color.dark.prim : props.theme.temacores.color.light.prim};
    transition: background-color .3s, color .5s;
`;

const TopContainer = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${(props)=>props.theme.darkMode?props.theme.temacores.color.dark.secun:props.theme.temacores.color.light.secun};
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.200);
    align-items: center;
    min-height: 300px;
    max-width: 1200px;
    padding: 15px;
    margin: 40px 20px;
    color: ${(props)=> props.theme.darkMode ? props.theme.temacores.color.dark.colorFont : props.theme.temacores.color.light.colorFont};
    transition: color .5s;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 15px;
    margin-top: 20px;

`;

const DivResume = styled.p`
    margin: 20px;
    margin-inline: 35px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    border-radius: 15px 0px 15px 0px;
    background-image: linear-gradient(45deg, #3023AE 0%, #e100ff 100%);
    box-shadow: 5px 5px 25px rgba(83, 9, 180, 0.774);
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 35px;
    color: ${(props)=>props.theme.temacores.color.dark.colorFont};
    cursor: pointer;
    transition: transform .3s linear;

    &:hover {
        transform: scale(95%);
    }   
`;

const BotContainer = styled.section` //Modificar dimenções depois para acompanhar (W H) a responsividade,  propsiedades apenas de testes!!
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 50px 0px 50px 0px;
    min-height: 500px;
    width: 100%;
    background-color: ${(props)=>props.theme.darkMode ? props.theme.temacores.color.dark.prim : props.theme.temacores.color.light.prim};
`;

export {SectionWrapper, TopContainer, Title, DivResume, Button, BotContainer}