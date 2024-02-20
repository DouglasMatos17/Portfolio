import { ContainerWrapper, Content, ImageDiv, ContentDiv, Title, Resume, TechnologyDiv } from "./DivProjectStyler"; //Nome do componente sem plural, pois referece a div de um projeto apenas

export function DivProject() {

    return(
        <>
        <ContainerWrapper>
            <Content>
                
                <ImageDiv>
                    <img src="" alt="" />
                </ImageDiv>
                
                <ContentDiv>
                    
                    <Title>
                        Titulo Do Projeto
                    </Title>
                    
                    <Resume>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, porro iste assumenda qui maiores officiis dolore impedit molestiae odio ut numquam libero! Iure optio laborum molestias accusantium eveniet vero laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui veniam fugit iure dicta. Praesentium inventore id, doloribus aliquam facere quasi molestiae eum accusantium ea iste earum eaque alias ipsa debitis.
                    </Resume>

                    <TechnologyDiv>
                        <img src="logoDark.pgn" width={50} alt="" />
                    </TechnologyDiv>

                </ContentDiv>

            </Content>
        </ContainerWrapper>
        </>
    )

}