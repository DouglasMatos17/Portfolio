import styled from "styled-components";

export const ContainerWrapper = styled.article`
    display: flex;
    min-height: 400px;
    max-width: 1200px;
    background-color: ${(props)=>props.theme.darkMode ? props.theme.temacores.color.dark.secun : props.theme.temacores.color.light.secun};
    border-radius: 10px;
    margin: 20px;
    color: ${(props)=>props.theme.darkMode? props.theme.temacores.color.dark.colorFont:props.theme.temacores.color.light.colorFont};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.200);
    transition: color .5s;

    @media (max-width: 900px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ImageDiv = styled.div`
    position: relative;
    width: 50%;
    border-radius: 10px 0px 0px 10px;
    background-image: url(image/fundo/fundo-projetos.png);
    background-repeat: no-repeat;
    background-position-x: -250px;
    background-position-y: -150px;
    background-size: 170%;
    & .noteDiv{
        position: absolute;
        width: 100%;
        top: 50%;
        right: 40%;
        transform: translate(50%, -50%);

        img{
            width: 90%;
            transition: all 1s;
        }
        img:hover{
            transform: scale(125%);
        }
    }

    & .celDiv{
        position: absolute;
        width: 16%;
        top: 60%;
        left: 25%;
        transform: translate(-50%, -50%);

        img{
            width: 100%;
            transition: all 1s;
        }
        img:hover{
            transform: scale(135%);
        }
    }
    
    @media (max-width: 900px){
        width: 100%;
        min-height: 300px;
        & .celDiv, .noteDiv{
            max-width: 550px;
        }
    }

`;

export const ContentDiv = styled.div`
    width: 50%;
    padding: 0px 25px 0px 25px;

    @media (max-width: 900px){
        width: 100%;
        padding: 0px 40px 25px 40px;
    }
`;


export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    gap: 10px;
    padding: 25px 0px 25px 0px;
    &::after{
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        background-color: ${(props)=>props.theme.darkMode?props.theme.temacores.color.light.secun:props.theme.temacores.color.dark.secun};
        transition: all .5s;
    }
`;

export const Resume = styled.p`
    padding: 25px 0px 25px 0px;
    
`;

export const TechnologyDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    & span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;