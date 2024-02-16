import styled, {keyframes} from "styled-components";

const waveAnimation = keyframes`
    0% {
        transform: perspective(500px) rotateY(0deg);
    }
    33.3% {
        transform: perspective(500px) rotateY(-5deg);
    }
    33.3% {
        transform: perspective(500px) rotateY(5deg);
    }
    100% {
        transform: perspective(500px) rotateY(0deg);
    }
`;

const SectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.darkMode ? props.theme.temacores.color.dark.prim : props.theme.temacores.color.light.prim};
    transition: background-color .3s, color .5s;
`;

const ContentTop = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    max-width: 800px;
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
    transition: transform 1.5s ease;

    &:hover {
        animation: ${waveAnimation} 1.5s ease infinite;
}   
`;

const ContentBotton = styled.section`

`;

export {SectionWrapper, ContentTop, Title, DivResume, ContentBotton, Button}