import temacores from './Themes.js'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

//Imports de componentes React
import Header from './Componentes/Header/Header.jsx'
import LobbySection from './Componentes/Lobby/LobbySection.jsx'
import ProfileSection from './Componentes/Profile/ProfileSection.jsx';

function App () {
    
    const [darkMode, setdarkMode] = useState(true);

    const toggleDarkMode = () => {
        setdarkMode(!darkMode)
    };

    return(
        <>
        <ThemeProvider theme={{temacores , darkMode}}>
            <Header toggleDarkMode={toggleDarkMode}/>
            <LobbySection/>
            <ProfileSection/>
        </ThemeProvider>
        </>
    )
}

export default App