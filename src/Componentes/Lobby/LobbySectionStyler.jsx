import styled from "styled-components";

const Section = styled.section`
    display: flex;
    height: 100vh;
    max-height: 1080px;
    min-height: 600px;
    align-items: center;
    background-image: ${(props)=> props.theme.darkMode? 'url(/HomeBG.jpg)' : 'url(/HomeBGLight.jpg)'};
    background-size: cover;
    background-position: center;
    transition: all .2s; //Para animação de tema DarkMode
    box-shadow: inset 0px -300px 500px -200px rgba(0, 0, 0, 0.3);


    & section{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${(props)=> props.theme.darkMode? 'rgba(0, 0, 0, 0.300)' : 'rgba(255, 255, 255, 0.350)'};
    box-shadow: 0px 0px 60px 10px rgba(0, 0, 0, 0.350);
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.temacores.color.light.secun};
    position: relative;
    }

    & .divConteudo{
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 10%;
    }

    & .divTitulo{
        display: flex;
    }

    & p {
        font-size: 2.1rem;
        font-weight: 700;
        color: ${(props)=>props.theme.darkMode ? props.theme.temacores.color.dark.colorFont: props.theme.temacores.color.light.colorFont};
    }

    & h1{
        font-size: 5rem;
        font-weight: 700;
        background-image: linear-gradient(-45deg, #4f41d4 0%, #e100ff 100%);
        background-clip: text; //Deixa o background apenas no fundo das letras
        -webkit-background-clip: text; //Compatibidade a versoes antigas de navegadores
        color: transparent; //Necessário para que o Background fique visivel
    }

    & .titulo{
            background-image: linear-gradient(-45deg, #4f41d4 0%, #cc00ff 100%);
            border-radius: 15px;
            padding: 10px 15px;
            color: white;
    }

    @media (max-width: 1000px){
        & h1{
            font-size: 3.5rem;
        }
        & p {
            font-size: 1.6rem;
        }
    }

    @media (max-width: 550px){
        height: 75vh;

        & h1{
            font-size: 2.5rem;
        }

        & p{
            font-size: 1.4rem;
        }
    }

    @media (max-width: 400px){
        & h1{
            font-size: 2rem;
        }
        & p{
            font-size: 1.1rem;
        }
    }
`;

export {Section};