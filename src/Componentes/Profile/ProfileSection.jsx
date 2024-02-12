import { useState } from 'react';
import { Section, Wrapper, Profile, Content } from "./ProfileSectionSyler";

function ProfileSection(){

    const [conteudoAtual, setConteudoAtual] = useState('hobby');

    const conteudo = {
        home:{
            titulo:'Home',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum quam esse ab maxime ut corporis quibusdam et placeat vitae beatae natus at, magnam, quae temporibus sed. Culpa, at veritatis.Dignissimos autem possimus quam hic magnam quaerat veniam vitae sapiente illum! Architecto eligendi atque numquam, commodi inventore nulla repellendus, voluptas aliquid assumenda debitis tempora enim facilis totam quia voluptatum autem.Amet recusandae perferendis iusto, rerum tempora hic minus, cupiditate, sed itaque illo magni qui? Error fuga debitis obcaecati nihil dolores tempora ipsam nobis magnam expedita maxime. Fuga velit ipsa repellat?'
        },
        objetivos:{
            titulo:'Objetivos',
            content: 'Me chamo Douglas, estudante autodidata de HTML5 e CSS3, além de estar cursando Engenharia de Software. Pratico diariamente, criando páginas e explorando recursos mais complexos como a linguagem de programação JavaScript e animações em CSS3. Busco uma oportunidade de estágio para aprimorar minhas habilidades, aprender mais e contribuir ativamente. Meu objetivo é aplicar meus conhecimentos, crescer profissionalmente e agregar valor à equipe e à empresa que eu fizer parte. Agradeço a oportunidade e espero poder demonstrar minha dedicação.'
        },
        hobby:{
            titulo:'Hobby',
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste est, amet placeat delectus cupiditate mollitia, modi ipsam tempora ab earum aliquam? Possimus ipsamin architecto, debitis obcaecati magnam quas dolore vitae dolores labore culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum assumenda explicabo animi corporis, error modi neque quae enim, reiciendis vel doloribus fugit iste non aspernatur tempora fuga eum sint. Dolores ipsam veritatis aliquam molestias cumque eveniet nisi soluta consequuntur laborum maiores! Blanditiis nam unde laborum aperiam,in architecto, debitis obcaecati magnam quas dolore vitae dolores labore culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    }

    const trocarConteudo = (novoConteudo) => {
        setConteudoAtual(novoConteudo);
    }


    return(
        <>
        <Section $ConteudoProps={conteudo}>
            <Content>
                <Wrapper key={conteudoAtual}>
                    <nav>
                        <button className='btnHome' onClick={() => trocarConteudo('home')}>Home</button>
                        <button className='btnObjetivos' onClick={() => trocarConteudo('objetivos')}>Objetivos</button> 
                        <button className='btnHobby' onClick={() => trocarConteudo('hobby')}>Hobby</button> 
                    </nav> 
                    <h2 className='contestH2'>{conteudo[conteudoAtual].titulo}</h2>
                    <p className='contestP'>{conteudo[conteudoAtual].content}</p>
                </Wrapper>
                
                <Profile>
                    <div className='divPerfil'>
                        <img src="Perfil.png" alt="Foto de Perfil" />
                    </div>
                    <div className='divTitulo'>
                        <h2>Desenvolvedor Front-End</h2>
                        <p className='tituloP'>Desenvolvedor Web</p>
                    </div>
                    <div className='divSocial'>
                        <a><img src="github.png" alt="Logo GitHub"/></a>
                        <a><img src="linkedin.png" alt="Logo Linkedin"/></a>
                    </div>
                </Profile>
            </Content>
        </Section>
        </>
    )
}

export default ProfileSection;
