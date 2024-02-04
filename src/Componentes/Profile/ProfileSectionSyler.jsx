import styled from "styled-components";

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 800px;
    gap: 50px;
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
`;

const Contest = styled.article`
    width: 500px;
    height: 70%;
    background-color: rgba(0, 0, 0, 0.500);
    border-radius: 15px;
    transition: all 1.3s;

    & button{
        background-color: rgb(0, 0, 0, 0.500);
        border: none;
        color: aliceblue;
        width: 50%;
        height: 10%;
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 600;
        transition: all .4s;
        border-top-left-radius: 15px;
    }
    & button:hover{
        background-color: rgba(128, 128, 128, 0.500);
    }

    & h2{
        margin: 25px;
        font-weight: 700;
        font-size: 1.8rem;
    }

    & p{
        margin: 25px;
        font-size: 1.1rem;
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