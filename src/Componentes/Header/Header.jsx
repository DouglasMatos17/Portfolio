import PropTypes from 'prop-types';
import { useState } from 'react';

/*Importações de style-components*/
import { SectionHeader, Nav, Wrapper, BtnTema, Button, Logo } from './HeaderStyler';

function Header({toggleDarkMode}) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = ()=> {
        setMenu(!menu)
    }
    return (
        <>
        <SectionHeader >
            <Nav $menu={menu}> 
                <Logo/>
                <ul>
                    <li><a href="#lobby">Inicio</a></li>
                    <li><a href="#perfil">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                <Wrapper>
                    <nav>
                        <a href="#"><i className="fa-brands fa-github fa-xl"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
                    </nav>
                    <BtnTema onClick={toggleDarkMode}>
                        <i className="fa-solid fa-sun"></i>
                        <div>
                            <span></span>
                        </div>
                        <i className="fa-solid fa-moon"></i>
                    </BtnTema>
                    <Button onClick={toggleMenu} $menu={menu}>
                        <span className='linha1'></span>
                        <span className='linha2'></span>
                        <span className='linha3'></span>
                    </Button>
                </Wrapper>
            </Nav>
        </SectionHeader>
        </>
    );
}

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
};


export default Header;