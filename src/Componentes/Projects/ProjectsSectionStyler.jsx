import styled, {keyframes} from "styled-components";

const waveAnimation = keyframes`
    0% {
        transform: perspective(500px) rotateY(0deg);
    }
    33% {
        transform: perspective(500px) rotateY(-7deg);
    }
    66% {
        transform: perspective(500px) rotateY(7deg);
    }
    100% {
        transform: perspective(500px) rotateY(0deg);
    }
`;

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
    min-height: 500px;
    max-width: 1200px;
    padding: 15px;
    margin: 40px 20px;
    color: ${(props)=> props.theme.darkMode ? props.theme.temacores.color.dark.colorFont : props.theme.temacores.color.light.colorFont};
    transition: color .5s;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    padding: 25px;

`;

const DivResume = styled.p`
    padding: 15px;
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
    transition: transform 1.5s linear;

    &:hover {
        animation: ${waveAnimation} 1.5s linear infinite;
}   
`;

const BotContainer = styled.section` //Modificar dimenções depois para acompanhar (W H) a responsividade 
    min-height: 500px;
    width: 100%;
    background-color: aquamarine;
`;

export {SectionWrapper, TopContainer, Title, DivResume, Button, BotContainer}