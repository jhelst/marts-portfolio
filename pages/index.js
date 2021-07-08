import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Navigation } from '../components/navigation';
import { GlobalStyles } from '../components/global-styles';
import { useMediaQuery } from '../hooks/use-media-query';

const Content = styled('div')`
`

const Column = styled(Col)`
display: flex;
flex-direction: column;
align-items: center;
`

const boxShadowStyle = css`
cursor: pointer;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
&::hover {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
}
`

const imgHoverStyles = css`
transition: opacity 50ms linear;
&:hover {
  opacity: 0.9;
}
`

const HeroImage = styled('img')`
${boxShadowStyle};
cursor: default;
width: 100%;
height: 100%;
`

const StillLifeImage = styled('img')`
${boxShadowStyle};
${imgHoverStyles};
max-width: 100%;
`


const PortraitImage = styled('img')`
${boxShadowStyle};
${imgHoverStyles};
max-width: 100%;
margin-top: 16px;
@media (min-width: 1024px){
  margin-top: 0;
}
`

const BoxShadowImage = styled(Image)`
${boxShadowStyle};
${imgHoverStyles};
`

const HomepageContainer = styled(Container)`
@media (max-width: 767px){
  padding: 0;
}
box-sizing: border-box;
margin-top: 24px;
@media (min-width: 1024px){
  margin-top: 80px;
} 
`

const ImageTitle = styled('h2')`
text-align: center;
margin-top: 16px;
font-size: 16px;

@media (min-width: 1024px){
  font-size: 24px;
}
`

const AboutBox = styled('div')`
margin: auto;
margin-top: -100px;
background-color: white; 
width: 80%;
padding: 8px;
border-radius: 6px;
box-shadow: 2px 2px 5px #0000001a;
`

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,100;1,300&display=swap" rel="stylesheet"/> 
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"></script>
      </Head>
      <Navigation />
      <Content>
        <Container fluid css={css`padding: 0;`}>
          <HeroImage src="images/portraits/3.png" />
        </Container>
        <HomepageContainer fluid id="portfolio">
          {isMobile ? (
            <>
              <Column><Link href="/portfolio/still-life"><a><StillLifeImage src="images/still-life/1.png"  /><ImageTitle>Still Life</ImageTitle></a></Link></Column>
              <Column><Link href="/portfolio/portrait"><a><PortraitImage src="images/portraits/1.png" /><ImageTitle>Portrait</ImageTitle></a></Link></Column>
            </>
          ) : (<Row>
            {/* <Column xs={1} /> */}
            <Column><Link href="/portfolio/still-life"><a><StillLifeImage src="images/still-life/1.png" /><ImageTitle>Still Life</ImageTitle></a></Link></Column>
            <Column><Link href="/portfolio/portrait"><a><PortraitImage src="images/portraits/1.png" /><ImageTitle>Portrait</ImageTitle></a></Link></Column>
            {/* <Column xs={1} /> */}
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid>
          {isMobile ? (<Col>
            <Link href="/portfolio/landscape">
              <a>
            <BoxShadowImage src="images/landscape/2.png" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
            <ImageTitle>Landscape</ImageTitle>
            </a>
            </Link>
          </Col>) : (<Row>
            <Col>
            <Link href="/portfolio/landscape">
              <a>
                <BoxShadowImage src="images/landscape/2.png" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
                <ImageTitle>Landscape</ImageTitle>
              </a>
              </Link>
            </Col>
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid id="about">
          <Column>
            <BoxShadowImage src="images/portraits/2.png"
            css={css`
              display: flex;
              margin: auto;
              max-width: 100%;
              z-index: -1;
            `} />
            <AboutBox>
              <ImageTitle>Sobre Mí</ImageTitle>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'black', margin: 'auto' }} />
              <div css={css`padding: 24px;`}>
              <p style={{marginTop: '16px'}}>Muchos intereses y actividades han atravesado mi vida. Sin embargo, el amor por la naturaleza y la fotografía siempre estuvieron presentes. No hay nada que me genere mayor paz que estar sumerjida en un paisaje natural, y si es con una cámara con la que pueda capturarlo, mejor.</p>
              <p>A la hora de fotografiar me gusta que todo sea lo más natural posible. Me cuesta dirigir a las personas para fotografiarlas y también encuentro difícil generar un entorno artificial para capturar, y eso creo que se muestra mucho en mis imágenes. Sin embargo, no lo veo como una falencia, sino como una de las tantas maneras de expresar este arte. </p>
              <p>Mi camino en la fotografía es muy largo, con mucha práctica y poco estudio formal, pero puedo decir que estoy muy orgullosa de poder ver mi crecimiento a lo largo de los años, lo cual me motiva a compartirlo con el mundo. Diciendo esto, les entrego una parte de mí -mi arte- esperando que puedan disfrutarlo tanto como yo disfruto hacerlo.</p>
              </div>
            </AboutBox>
          </Column>
        </HomepageContainer>
        <HomepageContainer fluid style={{ backgroundColor: 'rgba(193, 195, 201, 0.3)', padding: '16px' }}>
          <Col style={{ position: 'relative' }}>
            <ImageTitle>Contact</ImageTitle>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'black', margin: 'auto' }} />
          </Col>
        </HomepageContainer>
      </Content>
      <GlobalStyles/>
    </>
  )
}
