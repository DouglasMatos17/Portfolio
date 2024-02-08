import { useState } from 'react';
import { Section, Contest, Profile } from "./ProfileSectionSyler";

function ProfileSection(){

    const [conteudoAtual, setConteudoAtual] = useState('objetivos');

    const conteudo = {
        hobby:{
            titulo:'Hobby',
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste est, amet placeat delectus cupiditate mollitia, modi ipsam tempora ab earum aliquam? Possimus ipsamin architecto, debitis obcaecati magnam quas dolore vitae dolores labore culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum assumenda explicabo animi corporis, error modi neque quae enim, reiciendis vel doloribus fugit iste non aspernatur tempora fuga eum sint. Dolores ipsam veritatis aliquam molestias cumque eveniet nisi soluta consequuntur laborum maiores! Blanditiis nam unde laborum aperiam,in architecto, debitis obcaecati magnam quas dolore vitae dolores labore culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum assumenda explicabo animi corporis, error modi neque quae enim, reiciendis vel doloribus fugit iste non aspernatur tempora fuga eum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est quo? Natus eaque ipsum quibusdam labore odio exercitationem in expedita delectus quo. Similique repudiandae, vero autem accusantium ea eveniet quod!'
        },
        objetivos:{
            titulo:'Objetivos',
            content: 'Me chamo Douglas, estudante autodidata de HTML5 e CSS3, além de estar cursando Engenharia de Software. Pratico diariamente, criando páginas e explorando recursos mais complexos como a linguagem de programação JavaScript e animações em CSS3. Busco uma oportunidade de estágio para aprimorar minhas habilidades, aprender mais e contribuir ativamente. Meu objetivo é aplicar meus conhecimentos, crescer profissionalmente e agregar valor à equipe e à empresa que eu fizer parte. Agradeço a oportunidade e espero poder demonstrar minha dedicação.'
        }
    }

    const trocarConteudo = (novoConteudo) => {
        setConteudoAtual(novoConteudo);
    }


    return(
        <>
        <Section $ConteudoProps={conteudo}>
            <Contest key={conteudoAtual}>
                <button className='btnLeft' onClick={() => trocarConteudo('objetivos')}>Objetivos</button> 
                <button className='btnRight' onClick={() => trocarConteudo('hobby')}>Hobby</button> 
                <h2>{conteudo[conteudoAtual].titulo}</h2>
                <p>{conteudo[conteudoAtual].content}</p>
            </Contest>
            <Profile>
                <aside>
                    <img src="Perfil.png" alt="Foto de Perfil" />
                </aside>
                <h2>Desenvolvedor Front-End</h2>
                <p>Desenvolvedor Web</p>
                <div>
                    <a><img src="github.png" alt=""/></a>
                    <a><img src="linkedin.png" alt=""/></a>
                </div>
            </Profile>
        </Section>
        </>
    )
}

export default ProfileSection;
