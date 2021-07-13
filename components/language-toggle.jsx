import * as React from 'react'
import styled from 'styled-components'
import { Language } from '../components/icons/language'
import { LanguageContext } from '../context/language-context'

const Component = styled('button')`
position: fixed;
bottom: 32px;
right: 32px;
width: 40px;
height: 30px;
border: 0;
background-color: transparent;
z-index: 11;
&, & svg {cursor: pointer;}
& svg {
    transform: color 1s linear infinite;
}
`

export const LanguageToggle = () => {
    const {language, setLanguage} = React.useContext(LanguageContext)
    return (
        <Component onClick={() => { 
            console.log('component', {language, setLanguage})
            setLanguage(language === 'es' ? 'en' : 'es')}
        }>
            <Language />
        </Component>
    )
}