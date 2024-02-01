import styled from "styled-components";

const Section = styled.section`
    display: flex;
    height: 90vh;
    max-height: 1080px;
    min-height: 700px;
    justify-content: center;
    background-image: ${(props)=> props.theme.darkMode? 'url(/HomeBG.jpg)' : 'url(/HomeBGLightjpg.jpg)'};
    background-size: cover;
    background-position: bottom;
    transition: all .4s;
    gap: 30px;
    box-shadow: 0px 0px 55px 10px rgba(0, 0, 0, 0.700),
        inset 0px -300px 500px -200px rgba(0, 0, 0, 0.3);

    @media (max-width: 810px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 0px;
    }
`;

const LobbyLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 35%;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].secun};;

    & p {
            font-size: 1.8rem;
            font-weight: 900;  
        }

    & h1{
        font-size: 3rem;
        font-weight: 700;
        color: #a064ff;
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
        min-width: 350px;
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

const LobbyRight = styled.div`
    display: flex;
    height: 100%;
    width: 35%;
    justify-content: center;
    align-items: center;

    & div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 430px;
        min-width: 400px;
        height: 450px;
        border-radius: 40% 60% 28% 72% / 60% 60% 40% 40% ;
        box-shadow: 0px 0px 15px rgba(63, 6, 138, 0.911);
        background-image: linear-gradient(45deg, #3023AE 0%, #FF0099 100%);
    }

    & img{
        display: flex;
        border-radius: 50%;
        width: 330px;
    }

    @media (max-width: 1000px){
        & div{
            min-width: 300px;
            height: 350px;
        }

        & img{
            width: 250px;
        }
    }
    @media (max-width: 810px){
        margin-top: 130px;

        & div{
            width: 300px;
            height: 350px;
        }
    }
`;

export {Section , LobbyLeft, LobbyRight};