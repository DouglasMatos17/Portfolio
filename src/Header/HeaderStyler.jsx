import styled from "styled-components";

const SectionHeader  = styled.header`
    position: fixed;

    width: 100vw;
    height: 55px;

    background-color: rgba(0, 0, 0, 0.329);
    box-shadow: 1px 1px 15px black;
    backdrop-filter: blur(20px);

    z-index: 10;

    `;



const Nav = styled.nav`
    display: flex;

    justify-content: space-between;
    align-items: center;
    height: 55px;
    
    font-size: 1rem;
    font-weight: 600;
    
    z-index: 10;
    & h1{
        padding-left: 40px;
    
        font-size: 1.5rem;
    }
    
    & ul{
        display: flex;
    
        padding-right: 50px;
        gap: 45px;
    }
    
    & li {
    position: relative;
    padding-bottom: 9px;
    
    transition: all .7s;
    }
    
    & li:hover {
        transform: scale(120%);
    
        a{
        color: #9973bd;
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
`;

const BtnTema = styled.div`
    display: flex;
    margin-right: 70px;
    align-items: center;
    transition:all 1s;
`;

const ContentTema = styled.div`
    display: flex;
    margin: 0px 8px 0px 8px;
    align-items: center;
    justify-content: right;
    width: 35px;
    height: 15px;
    border: solid 2px white;
    border-radius: 30px;
    background-color: black;
    transition:all 1s;
`;

const CirculoTema = styled.div`
    margin: 1px;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: white;
    transition:all 1s;
`;

export { SectionHeader, Nav, BtnTema, ContentTema, CirculoTema };