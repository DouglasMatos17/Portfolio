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
    height: 100vh;
    min-height: 800px;
    gap: 80px;
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
    transition: all .2s;
`;

const Contest = styled.article`
    width: 500px;
    height: 70%;
    color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark' : 'light'].colorFont};
    background-color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].secun};
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.400);

    & button{
        background-color: rgb(0, 0, 0, 0.300);
        border: none;
        width: 50%;
        color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark' : 'light'].colorFont};
        height: 10%;
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 600;
        transition: all .4s;
        
    }
    & .btnLeft{
        border-top-left-radius: 15px;
    }

    & .btnRight{
        border-top-right-radius: 15px;
    }

    & button:hover{
        background-color: rgba(128, 128, 128, 0.100);
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
    background-color: rgba(0, 0, 0, 0.500);
    border-radius: 15px;
    gap: 20px;

    & image img{
        width: 250px;
        border-radius: 50%;
    }

    & div img{
        width: 30px;
        background-color: rgba(128, 128, 128, 0.500);
        padding: 15px;
        border-radius: 8px;
        margin: 10px;
        cursor: pointer;
    }
`;

export {Section, Contest, Profile}