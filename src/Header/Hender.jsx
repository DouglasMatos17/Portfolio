import './Hender.css'

function Header() {
return (
<header>
    <div className="nav">
    <div className="logo">Meu Portfólio</div>
    <ul>
        <li><a href="#lobby">Inicio</a></li>
        <li><a href="#perfil">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#contatos">Contatos</a></li>
    </ul>
    </div>
</header>
);
}

export default Header;