import * as React from 'react'
import App from 'next/app'
import { LanguageContext } from '../context/language-context'
import { LanguageToggle } from '../components/language-toggle'
import { Navigation } from '../components/navigation'     
import { lang } from '../lang/main'

export default class MartsApp extends App {
    state = {
        language: 'es'
    }
    setLanguage = (lang) => this.setState({language:lang}) 
    render() {
        const { Component, pageProps } = this.props;

        const l = lang.find(lan => lan.lang === this.state.language)
        return (
            <LanguageContext.Provider value={{ language: this.state.language, setLanguage: this.setLanguage, translations: l}}>
                <Navigation meta={l}/>
                <Component {...pageProps} />
                <LanguageToggle/>
            </LanguageContext.Provider>
        )
    }
}