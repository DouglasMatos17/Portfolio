import { ContainerWrapper, ImageDiv, ContentDiv, Title, Resume, TechnologyDiv } from "./DivProjectStyler"; //Nome do componente sem plural, pois referece a div de um projeto apenas

export function DivProject() {

    return(
        <>
        <ContainerWrapper>
            <ImageDiv>
                <div className="noteDiv">
                    <img src='./src/assets/Elementos/note-relogio.png' alt="" />
                </div>

                <div className="celDiv">
                    <img src='./src/assets/Elementos/cel-relogio.png' alt="" />
                </div>
               
            </ImageDiv>

            <ContentDiv>
                <Title>
                    Titulo Do Projeto
                </Title>
                
                <Resume>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, porro iste assumenda qui maiores officiis dolore impedit molestiae odio ut numquam libero! Iure optio laborum molestias accusantium eveniet vero laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui veniam fugit iure dicta. Praesentium inventore id, doloribus aliquam facere quasi molestiae eum accusantium ea iste earum eaque alias ipsa debitis.
                </Resume>

                <TechnologyDiv>
                    <span>
                        <i className="fa-brands fa-react fa-2x"></i>React
                    </span>
                    
                    <span>
                        <i className="fa-brands fa-html5 fa-2x"></i>React
                    </span>
                    
                    <span>
                        <i className="fa-brands fa-css3-alt fa-2x"></i>React
                    </span>
                    
                    <span>
                        <i className="fa-brands fa-square-js fa-2x"></i>React
                    </span>
                    
                </TechnologyDiv>
            </ContentDiv>

        </ContainerWrapper>
        </>
    )

}