import { useState } from 'react';
import { Section, Contest, Profile } from "./ProfileSectionSyler";

function ProfileSection(){

    const [conteudoAtual, setConteudoAtual] = useState('objetivos');

    const conteudo = {
        hobby:{
            titulo:'Hobby',
            content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste est, amet placeat delectus cupiditate mollitia, modi ipsam tempora ab earum aliquam? Possimus ipsam sunt impedit autem nulla praesentium aliquam.'
        },
        objetivos:{
            titulo:'Objetivos',
            content: 'Lorem 2 ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusantium aut nulla modi repudiandae doloremque laborum quis saepe ratione, in architecto, debitis obcaecati magnam quas dolore vitae dolores labore culpa!'
        }
    }

    const trocarConteudo = (novoConteudo) => {
        setConteudoAtual(novoConteudo);
    }


    return(
        <>
        <Section ConteudoProps={conteudo}>
            <Contest key={conteudoAtual}>
                <button className='btnLeft' onClick={() => trocarConteudo('objetivos')}>Objetivos</button> 
                <button className='btnRight' onClick={() => trocarConteudo('hobby')}>Hobby</button> 
                <h2>{conteudo[conteudoAtual].titulo}</h2>
                <p>{conteudo[conteudoAtual].content}</p>
            </Contest>
            <Profile>
                <image>
                    <img src="Perfil.png" alt="Foto de Perfil" />
                </image>
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
