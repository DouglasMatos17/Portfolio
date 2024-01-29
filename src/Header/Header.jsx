import PropTypes from 'prop-types';

/*Importações de style-components*/
import { SectionHeader, Nav, BtnTema, ContentTema, CirculoTema } from './HeaderStyler';

function Header({toggleDarkMode}) {

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
                <BtnTema onClick={toggleDarkMode}>
                    <i className="fa-solid fa-sun"></i>
                    <ContentTema>
                        <CirculoTema></CirculoTema>
                    </ContentTema>
                    <i className="fa-solid fa-moon"></i>
                </BtnTema>
            </Nav>
        </SectionHeader>
        </>
    );
}

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
};


export default Header;