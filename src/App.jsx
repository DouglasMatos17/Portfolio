import { ThemeProvider } from 'styled-components'
import Tema from './Temas.js'

//Imports de componentes React
import Header from './Header/Header.jsx'

function App () {
    
    function alterarDarkMode() {
        if (Tema.darkModo) {
            Tema.darkModo = false
        } else {
            Tema.darkModo = true
        }
        console.log(Tema)
    }

    return(
        <>
        <ThemeProvider theme={Tema}>
            <Header alterarDarkMode={alterarDarkMode}/>
        </ThemeProvider>
        </>
    )
}

export default App

