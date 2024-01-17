import './Hender.css'

function Header() {
return (
    <>
<header>
    <div className="nav">
    <div className="logo">Meu Portfólio</div>
    <ul>
        <li><a href="#lobby">&lt; Inicio &gt;</a></li>
        <li><a href="#perfil">&lt; Sobre &gt;</a></li>
        <li><a href="#projetos">&lt; Projetos &gt;</a></li>
        <li><a href="#skills">&lt; Habilidades &gt;</a></li>
        <li><a href="#contatos">&lt; Contatos &gt;</a></li>
    </ul>
    </div>
</header>
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

export default Header;