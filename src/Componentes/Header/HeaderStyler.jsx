import styled from "styled-components";

const SectionHeader  = styled.header`
    position: fixed;
    width: 100vw;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.329);
    box-shadow: 1px 1px 15px black;
    backdrop-filter: blur(20px);
    z-index: 10;
    `;


const Nav = styled.nav`
    display: flex;    
    justify-content: center;
    align-items: center;
    height: 100%;    
    font-size: 1rem;
    font-weight: 600;    
    z-index: 10;
    position: relative;
    & ul{
        display: flex;
        height: 100%;
        align-items: center;      
        @media (max-width: 1000px){
            position: absolute;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 300px;
            top: 55px;
            right: -400px;
            transform: ${(props)=> props.$menu? 'translateX(-400px)' : 'translateX(0px)'};
            z-index: 0;
            background-color: #3b056de6;
            box-shadow: 1px 1px 15px black;
            transition: .5s;
        }
    }
    
    & li {
        display: flex;
        position: relative;
        height: 100%;
        align-items: center;
        transition: all .7s;
    }
    & a{
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
    & li:hover {
        a{
            background-color: #7413ce1f;
            transition: all .5s;
            @media (max-width: 630px){
                font-size: 18px;
            }
            @media (max-width: 420px){
                font-size: 15px;
            }
        }
        
    }    
    & a::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 3px;
        border-radius: 3px;
        transition: .5s;        
        background-color: #7313ce;
    }
    & li:hover a::after{
        width: 100%;
        
    }
    & img{
        width: 45px;
        margin-left: 45px;
    }
    `;

const Logo = styled.image`
    width: 45px;
    height: 45px;
    background-image: url(${(props)=>props.theme.darkMode? 'logoDark.png' : 'logoLight.png'});
    background-position: center;
    background-size: cover;
    border: none;
    position: absolute;
    top: center;
    left: 3%;
`;

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    top: center;
    right: 3%;
    gap: 10px;
    & nav{
        display: flex;
        justify-content: center;
        margin-right: 30px;
        align-items: center;
        gap: 10px;
    }
`;


const BtnTema = styled.div`
    display: flex;
    align-items: center;
    transition:all 1s;
    & i{
        margin:1px;
    }
    & div{
        display: flex;
        margin: 0px 5px 0px 5px;
        align-items: center;
        justify-content: right;
        width: 35px;
        height: 15px;
        border: solid 2px white;
        border-radius: 30px;
        background-color: ${(props) => props.theme.darkMode ? 'black' : 'white'};
        transition:all .5s;
    }
    & span{
        margin: 1px;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.darkMode ? 'white' : 'black'};
        transform: translateX(${(props)=>props.theme.darkMode?'0%':'-150%'});
        transition:all .5s;
    }
`;


const Button = styled.button`
    display: none;
    flex-direction: column;
    width: 40px;
    height: 35px;
    margin-left: 10px;
    background-color: #52525287;
    border: 0px;
    border-radius: 5px;
    gap: 3px;
    cursor: pointer;
    & span {
        display: flex;
        width: 23px;
        height: 3px;
        background-color: white;
        border-radius: 1px;
        transition: all .5s;
    }    
    & .linha1{
        transform: ${(props)=> props.$menu? 'translateY(3px)rotate(-45deg)' : ''};
    }
    & .linha2{
        display: ${(props)=> props.$menu? 'none' : 'flex'};
    }
    & .linha3{
        transform: ${(props)=> props.$menu ? 'translateY(-3px)rotate(45deg)': '' };
    }
    @media (max-width: 1000px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export { SectionHeader, Nav, Wrapper, BtnTema, Button, Logo };