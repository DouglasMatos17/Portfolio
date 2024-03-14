/* eslint-disable react/prop-types */


import { ContainerWrapper, ImageDiv, ContentDiv, Title, Resume, TechnologyDiv, Buttons } from "./DivProjectStyler"; //Nome do componente sem plural, pois referece a div de um projeto apenas


export function DivProject({ project }) {

    const iconMap = {
        react: 'react',
        html: 'html5',
        css: 'css3-alt',
        js: 'square-js'
    };

    return(
        <>
        <ContainerWrapper>
            <ImageDiv>
                <div className="noteDiv">
                    <img src={project.imgNote} alt="" />
                </div>

                <div className="celDiv">
                    <img src={project.imgCel} alt="" />
                </div>
            </ImageDiv>

            <ContentDiv>
                <Title>
                    {project.title}
                </Title>
                
                <Resume>
                    {project.resume}
                </Resume>

                <TechnologyDiv>
                    
                    {Object.keys(project.tech).map((tech, index) => (
                        project.tech[tech] && (
                            <span key={index}>
                                <i className={`fa-brands fa-${iconMap[tech]} fa-2x`}></i>{tech}
                            </span>
                        )
                    ))}
                    
                </TechnologyDiv>

                <Buttons>
                    <button className="btnProject btnProject-GitHub">Ver GitHub</button>
                    <button className="btnProject btnProject-Site">Ver Site</button>
                </Buttons>
            </ContentDiv>

        </ContainerWrapper>
        </>
    )

}