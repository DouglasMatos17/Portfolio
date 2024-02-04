import {Section, LobbyLeft, LobbyRight} from './LobbySectionStyler'

function LobbySection() {

    return(
        <>
        <Section>
            <LobbyLeft>
                <div>
                    <p>Olá,<br/> Meu nome é</p>
                    <h1>Douglas Matos.</h1>
                </div>
            </LobbyLeft>
            <LobbyRight>
                <div>
                </div>
                    <img src="Perfil.png" alt="Foto Douglas Matos"/>
            </LobbyRight>
        </Section>
        </>
    )
}

export default LobbySection;