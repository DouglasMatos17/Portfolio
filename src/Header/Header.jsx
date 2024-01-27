import PropTypes from 'prop-types'; // Importe PropTypes


/*Importações de componentes*/
import { SectionHeader, Nav, BtnTema, ContentTema, CirculoTema } from './HeaderStyler';

function Header({alterarDarkMode}) {

    return (
        <>
        <SectionHeader>
            <Nav>
                <h1>Douglas Matos</h1>
                <ul>
                    <li><a href="#lobby">Inicio</a></li>
                    <li><a href="#perfil">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                <BtnTema onClick={alterarDarkMode}>
                    <i className="fa-solid fa-sun"></i>
                    <ContentTema>
                        <CirculoTema></CirculoTema>
                    </ContentTema>
                    <i className="fa-solid fa-moon"></i>
                </BtnTema>
            </Nav>
        </SectionHeader>
            <nav>
                <div className="lobby-social-nav">
                    <a href="https://github.com/DouglasMatos17" target="_blank" rel="noopener noreferrer">
                        <img src="github.png" alt="Logo GitHub"/>
                        </a>
                    
                    <a href="https://www.linkedin.com/in/douglasmatos17/" target="_blank" rel="noopener noreferrer">
                        <img src="linkedin.png" alt="Logo Linkedin"/> 
                        </a>
                </div>
            </nav>
            </>
    );
}

Header.propTypes = {
    alterarDarkMode: PropTypes.func.isRequired,
};


export default Header;