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
    height: 75vh;
    min-height: 800px;
    gap: 100px;
    color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark' : 'light'].colorFont};
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
    transition: all .2s;
`;

const Contest = styled.article`
    width: 500px;
    height: 70%;
    border-radius: 15px;

    & button{
        background-color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].quate};
        border: none;
        width: 50%;
        color: ${(props)=> props.theme.temacores.color.dark.colorFont};
        height: 10%;
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 600;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.300);
        transition: all .4s;
        
    }
    & .btnLeft{
        border-bottom-left-radius: 15px;
    }

    & .btnRight{
        border-top-right-radius: 15px;
    }

    & button:hover{
        background-color: rgba(128, 128, 128, 0.200);
        color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].colorFont};
    }

    & h2{
        margin: 25px;
        font-weight: 700;
        font-size: 1.8rem;
        animation: ${fadeIn} 2s ease forwards;
    }

    & p{
        margin: 25px;
        font-size: 1.1rem;
        animation: ${fadeIn} 2s ease forwards;
    }
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 70%;
    border-radius: 15px;
    gap: 30px;

    
    & aside{
        display: flex;
        flex-direction: column;
        width: 350;
        height: 350;
        border-radius: 40% 60% 28% 72% / 60% 60% 40% 40% ;
        box-shadow: 0px 0px 15px rgba(63, 6, 138, 0.911);
        background-image: linear-gradient(45deg, #3023AE 0%, #FF0099 100%);
    }
    
    & aside img{
        width: 450px;
        border-radius: 40% 60% 28% 72% / 60% 60% 40% 40%;
    }
    
    & h2{
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    & p{
        font-size: 1.1rem;
        font-weight: 400;
    }

    & div a img{
        width: 30px;
        background-color: rgba(128, 128, 128, 0.500);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.300);
        padding: 15px;
        border-radius: 13px;
        margin: 10px;
        cursor: pointer;
    }
    `;

export {Section, Contest, Profile}