import styled from "styled-components";

const Section = styled.section`
    display: flex;
    height: 100vh;
    max-height: 1080px;
    min-height: 700px;
    justify-content: center;
    background-image: ${(props)=> props.theme.darkMode? 'url(/HomeBG.jpg)' : 'url(/HomeBGLight.jpg)'};
    background-size: cover;
    background-position: bottom;
    transition: all .4s;
    gap: 30px;
    box-shadow: 0px 0px 55px 10px rgba(0, 0, 0, 0.700),
        inset 0px -300px 500px -200px rgba(0, 0, 0, 0.3);


    & section{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${(props)=> props.theme.darkMode? 'rgba(0, 0, 0, 0.300)' : ''};
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.temacores.color.light.secun};
    position: relative;
    }

    & div{
        position: absolute;
        left: 300px;
    }

    & p {
            font-size: 2.1rem;
            font-weight: 700;  
        }

    & h1{
        font-size: 5rem;
        font-weight: 700;
        background-image: linear-gradient(-45deg, #4f41d4 0%, #f325a1 100%);
        background-clip: text; //Deixa o background apenas no fundo das letras
        -webkit-background-clip: text; //Compatibidade a versoes antigas de navegadores
        color: transparent; //Necessário para que o Background fique visivel
    }

    & .titulo{
            font-size: 2.1rem;
            font-weight: 700;  
    }

    @media (max-width: 1000px){
        & h1{
            font-size: 2.5rem;
        }
        & p {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 810px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 0px;
    }

    @media (max-width: 400px){
        min-width: 300px;
        & h1{
            font-size: 2rem;
        }
        & p{
            font-size: 1.1rem;
        }
    }
`;

export {Section};