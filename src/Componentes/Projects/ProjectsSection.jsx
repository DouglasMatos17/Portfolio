import { useState } from 'react';
import { SectionWrapper, TopContainer, Title, DivResume, Button, BotContainer } from "./ProjectsSectionStyler";
import { DivProject } from "./DivProject/DivProject"
import { projects } from "../../BancoDeDados"

export function ProjectsSection(){
    
    const [projectActive, setProjectActive] = useState(false);

    const handleClick = () => {
            setProjectActive(projectActive ? false : true);
    }
    
    return(
        <>
        <SectionWrapper>

            <TopContainer>
                    <Title>
                        Projetos
                    </Title>
                    <DivResume>
                    Ao longo de meses de estudo e prática, enfrentei desafios que, no início, me fizeram perceber que ainda tinha muito a aprender. Os projetos eram complicados, e eu sabia que não tinha o conhecimento necessário. No entanto, com determinação e perseverança, comecei a compreender as nuances e aprimorar minhas habilidades. Hoje, estou no início desta jornada, mas estou me esforçando a cada dia para crescer e melhorar, ansioso para enfrentar novos desafios.
    
                    O projeto que mais me cativou durante essa jornada foi a criação do meu próprio portfólio. Nele, pude aplicar parte dos conhecimentos adquiridos para resolver os desafios desde o levantamento de requisitos até a implementação de funcionalidades voltadas para os usuários, que são as pessoas interessadas em conhecer meu perfil profissional. Cada etapa do processo envolveu superar obstáculos, e continuo evoluindo meu portfólio a cada mês para refletir meu progresso contínuo.
    
                    Se desejar, fique à vontade para explorar os projetos que venho desenvolvendo.
                    </DivResume>
                    
                    <Button onClick={handleClick}> 
                        {projectActive ? 'Fechar projetos': 'Ver projetos'}
                    </Button>
            </TopContainer>

            <BotContainer>

            {projectActive ? (
                    // Se projectActive for true, renderiza todos os projetos
                    projects.map((project, index) => (
                        <DivProject key={index} project={project}/>
                    ))
                ) : (
                    // Se projectActive for false, renderiza apenas o primeiro projeto
                    <DivProject key={0} project={projects[0]}/>
                )}
                
            </BotContainer>

        </SectionWrapper>
        </>
    )
}