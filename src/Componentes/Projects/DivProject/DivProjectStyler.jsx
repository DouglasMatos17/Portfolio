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
        width: 80%;
        top: 50%;
        right: 48%;
        transform: translate(50%, -50%);

        img{
            width: 100%;
            transition: all .5s;
        }
        img:hover{
            transform: scale(120%);
        }
    }

    & .celDiv{
        position: absolute;
        width: 15%;
        top: 65%;
        left: 18%;
        transform: translate(-50%, -50%);

        img{
            width: 100%;
            transition: all .5s;
        }
        img:hover{
            transform: scale(130%);
        }
    }
    
    @media (max-width: 900px){
        width: 100%;
        min-height: 390px;
        & .celDiv, .noteDiv{
            max-width: 550px;
        }
        & .celDiv{
        top: 65%;
        left: 25%;
    }

    @media (max-width: 600px){
        min-height: 300px;

    }
}

`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 25px;
    gap: 20px;

    @media (max-width: 900px){
        width: 100%;
    }
`;


export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    gap: 10px;
    padding: 10px;
    &::after{
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        background-image: linear-gradient(45deg, #3023AE 0%, #e100ff 110%);
        transition: all .5s;
    }
`;

export const Resume = styled.p`
    padding: 10px;
    
`;

export const TechnologyDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    & span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    gap: 15%;
    & .btnProject{
         //vem no estilo padrão do html
        height: 40px;
        width: 120px;
        border-radius: 25px;
        padding: 10px;
        border: solid  ${props=>props.theme.darkMode ? props.theme.temacores.color.light.prim : props.theme.temacores.color.dark.prim} 1px;
        border: none;
        color: ${(props)=> props.theme.temacores.color[props.theme.darkMode? 'dark': 'light'].colorFont};
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        font-size: .8rem;
        font-weight: 400;
        transition: all .5s;
    }

    & .btnProject-Site{
        background-image: linear-gradient(45deg, #3023AE 0%, #e100ff 110%);
        color: ${props=>props.theme.temacores.color.dark.colorFont};
    }

    & .btnProject-GitHub{
        background-color: transparent;
    }

    & .btnProject:hover{
        transform: scale(95%);
    }
    @media (max-width: 450px){
        flex-direction: column;
        align-items: center;
        gap: 20px;
        & .btnProject{
            width: 80%;
        }
        
    }
`;