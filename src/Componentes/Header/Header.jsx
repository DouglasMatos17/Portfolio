import PropTypes from 'prop-types';
import { useState } from 'react';

/*Importações de style-components*/
import { SectionHeader, Nav, BtnTema, ContentTema, CirculoTema, Button } from './HeaderStyler';

function Header({toggleDarkMode}) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = ()=> {
        setMenu(!menu)
    }

    return (
        <>
        <SectionHeader >
            <Nav $menu={menu}>
                <h1>Douglas Matos</h1>
                <ul>
                    <li><a href="#lobby">Inicio</a></li>
                    <li><a href="#perfil">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                <div>
                    <BtnTema onClick={toggleDarkMode}>
                        <i className="fa-solid fa-sun"></i>
                        <ContentTema>
                            <CirculoTema></CirculoTema>
                        </ContentTema>
                        <i className="fa-solid fa-moon"></i>
                    </BtnTema>
                    <Button onClick={toggleMenu} $menu={menu}>
                        <span className='linha1'></span>
                        <span className='linha2'></span>
                        <span className='linha3'></span>
                    </Button>
                </div>
            </Nav>
        </SectionHeader>
        </>
    );
}

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
};


export default Header;