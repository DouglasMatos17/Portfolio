import styled, { keyframes } from 'styled-components';

// Animação de entrada do texto (<h2> e <p> do componente Wrapper)
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


// Sessão principal
const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 1000px;
    padding: 15px;

    //Alterações de thema
    color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark' : 'light'].colorFont};
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
    transition: background-color .3s, color .5s;
`;

// Conteudo main da Sessão principal
const Content = styled.section`
    display: flex;
    justify-content: center;

    width: 100%;
    gap: 50px;

    @media (max-width: 950px) {
        flex-direction: column-reverse;
        align-items: center;
        height: auto;
}`;

// Textos contando sobre o perfil pessoal
const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    max-width: 600px;
    min-width: 250px;
    @media (max-width: 950px) {
        max-width: 700px;
    }

    & nav{
        display: flex;
        justify-content: center;

        & button{
            width: 33%;
            background-color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].quate};
            border: none;
            color: ${(props)=> props.theme.temacores.color.dark.colorFont};
            height: 50px;
            cursor: pointer;
            font-size: 1.4rem;
            font-weight: 600;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.300);
            transition: all .4s;
            @media (max-width: 450px) {
            font-size: 1.2rem;
            }
        }
        & .btnHome{
            border-bottom-left-radius: 15px;
        }
        & .btnHobby{
            border-top-right-radius: 15px;
        }
        & button:hover{
            background-color: rgba(128, 128, 128, 0.200);
            color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].colorFont};
        }
    }
    & .contestH2{
        margin: 25px;
        font-weight: 700;
        font-size: 1.8rem;
        animation: ${fadeIn} 2s ease forwards;

        @media (max-width: 450px) {
            font-size: 1.2rem;
            margin: 15px 0px 0px 15px;
    }
    }

    & .contestP{
        margin: 25px;
        font-size: 1.1rem;
        animation: ${fadeIn} 2s ease forwards;

        @media (max-width: 450px) {
            font-size: 1rem;
            font-weight: 100;
            margin: 15px;
    }
    }
`;




// Divisão do perfil (foto, area e links sociais)
const Profile = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    min-width: 300px;
    gap: 30px;

    @media (max-width: 950px) {
        padding-top: 70px;
    }


    & .divPerfil{
        display: flex;
        flex-direction: column;
        @media (max-width: 950px) {
            max-width: 90vw;
    }
        
        & img{
            width: 100%;
            border-radius: 40% 60% 28% 72% / 60% 60% 40% 40%;
            background-image: linear-gradient(45deg, #3023AE 0%, #e100ff 100%);
            box-shadow: 0px 0px 15px rgba(63, 6, 138, 0.911);
        }

    }
    & .divTitulo{
        display: flex;
        flex-direction: column;
        align-items: center;

        & h2{
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 15px;
            
            @media (max-width: 450px) {
                font-size: 1.5rem;
            }
        }
        & p{
            font-size: 1.3rem;
            font-weight: 700;
            @media (max-width: 450px) {
                font-size: 1rem;
            }
        }
    }
    & .divSocial{
        display: flex;
        gap: 30px;
        & a{
            padding: 10px;
            justify-content: center;
            background-color: rgba(128, 128, 128, 0.500);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.300);
            border-radius: 13px;
            cursor: pointer;
            transition: all .3s;

            & img{
                width: 35px;
            }
        }

        & a:hover {
            transform: scale(112%);
        }
    }
`;

export {Section, Wrapper, Profile, Content}