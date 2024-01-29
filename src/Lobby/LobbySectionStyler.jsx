import styled from "styled-components";

const Section = styled.section`
    display: flex;
    height: 100vh;
    max-height: 1080px;
    background-color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].prim};
    transition: all .5s;
`;

const LobbyLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: ${(props) => props.theme.temacores.color[props.theme.darkMode ? 'dark' : 'light'].secun};;

    & h1{
        font-size: 50px;
        font-weight: 700;
        color: rgb(160, 100, 255);
    }
`;

const LobbyRight = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;

    & img{
        display: flex;
        border-radius: 50%;
        box-shadow: 0px 0px 15px rgba(63, 6, 138, 0.911);
    }
`;

export {Section , LobbyLeft, LobbyRight};