import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Home/Home.css'

//Imports de componentes React
import Header from './Header/Hender.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <section className="lobby" id="lobby">
        <div className="lobby-left">
            <div className="lobby-msg">
                <h1>Olá,</h1>
                <h1>Meu nome é</h1>
                <h1 className="name">Douglas Matos</h1>
            </div>
            <div className="lobby-prof">
                <a href="#skills"><img src="imagens/html5.png" alt="Logo html5"/></a>
                <a href="#skills"><img src="imagens/css3.png" alt="Logo css3"/></a>
                <a href="#skills"><img src="imagens/logo-js.png" alt="Logo Java Script"/></a>
            </div>
        </div>
        <div className="lobby-right">
            <div className="lobby-right-nuvem">
                <div className="lobby-card">
                    <div className="lobby-perfil">
                        <img src="Perfil.png" alt="Foto Douglas Matos"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="perfil" id="perfil">
        <div className="perfil-left">
            <div className="perfil-left-nuvem">
            </div>
        </div>
        <div className="perfil-right">
            <div className="perfil-right-card">
                <h1>Desenvolvedor Front-End</h1>
                <h2>Sou um desenvolvedor Front-End com habilidades em</h2>
                <div className="perfil-skill"><h3>HTML5, CSS3, Java Script, React, Git e GitHub</h3></div>

                <p>Me chamo Douglas, estudante autodidata de HTML5 e CSS3, além de estar cursando Engenharia de Software. 
                Pratico diariamente, criando páginas e explorando recursos mais complexos como a linguagem de programação 
                JavaScript e animações em CSS3. Busco uma oportunidade de estágio para aprimorar minhas habilidades, 
                aprender mais e contribuir ativamente.</p>
                
                <p>Meu objetivo é aplicar meus conhecimentos, crescer profissionalmente e agregar valor à equipe e à empresa 
                que eu fizer parte. Agradeço a oportunidade e espero poder demonstrar minha dedicação.</p>

                <p>Baixe meu curriculo no botão abaixo!</p>
                <div>
                    <a className="btn-curriculo" href="arquivos/Curriculo Douglas Matos.pdf" target="_blank">Download</a>
                </div>
            </div>
        </div>
    </section>
  </React.StrictMode>,
)
