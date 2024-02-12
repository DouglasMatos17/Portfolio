import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    min-height: 600px;
    gap: 3vw;
    color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark' : 'light'].colorFont};
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
    transition: all .2s;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        height: auto;
        padding-top: 100px;
    }
`;

const Contest = styled.article`
    max-width: 500px;
    height: 70%;
    border-radius: 15px;

    @media (max-width: 1300px) {
        min-width: 400px;
    }

    @media (max-width: 900px) {
        max-width: 700px;
        min-width: 300px;
        margin: 40px;
    }

    & nav{
        display: flex;
        height: 10%;
        justify-content: center;

        & button{
            width: 33%;
            background-color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].quate};
            border: none;
            color: ${(props)=> props.theme.temacores.color.dark.colorFont};
            height: 100%;
            cursor: pointer;
            font-size: 1.4rem;
            font-weight: 600;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.300);
            transition: all .4s;

            @media (max-width: 900px) {
                height: 50px;
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
    }

    & .contestP{
        margin: 25px;
        font-size: 1.1rem;
        animation: ${fadeIn} 2s ease forwards;
    }
`;





const Profile = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 500px;
    height: 70%;
    border-radius: 15px;
    gap: 50px; 

    @media (max-width: 1300px) {
        min-width: 400px;
    }

    @media (max-width: 900px) {
        margin: 60px;
        padding: 50px;
    }


    & .divPerfil{
        display: flex;
        max-width: 400px;
        flex-direction: column;
        border-radius: 40% 60% 28% 72% / 60% 60% 40% 40% ;
        box-shadow: 0px 0px 15px rgba(63, 6, 138, 0.911);
        background-image: linear-gradient(45deg, #3023AE 0%, #e100ff 100%);
        & img{
            border-radius: 40% 60% 28% 72% / 60% 60% 40% 40%;
        }
        @media (max-width: 900px) {
            max-width: 80vw;
    }
    }
    & .divTitulo{
        display: flex;
        flex-direction: column;
        align-items: center;

        & h2{
            font-size: 2rem;
            font-weight: 700;
        }
        & p{
            font-size: 1.3rem;
            font-weight: 700;
        }
    }
    & .divSocial{
        font-size: 1.4rem;
        font-weight: 400;
        & img{
            width: 35px;
            background-color: rgba(128, 128, 128, 0.500);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.300);
            padding: 12px;
            border-radius: 13px;
            margin: 10px;
            cursor: pointer;
            transition: all .3s;
        }
        & img:hover {
            transform: scale(112%);
        }
    }
`;

export {Section, Contest, Profile}