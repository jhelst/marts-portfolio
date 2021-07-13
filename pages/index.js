import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Column } from '../components/components';
import { useMediaQuery } from '../hooks/use-media-query';
import { Envelope } from '../components/icons/envelope';

import { LanguageContext } from '../context/language-context';
import { GlobalStyles } from '../components/global-styles';

const Content = styled('div')`
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

const Home = ({foo}) =>  {
  console.log({foo})
  const isMobile = useMediaQuery('(max-width: 767px)')
  const {translations: l} = React.useContext(LanguageContext)


  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,100;1,300&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"></script>
      </Head>
      <Content>
        <Container fluid css={css`padding: 0;`}>
          <HeroImage src="images/portraits/3.png" />
        </Container>
        <HomepageContainer fluid id="portfolio">
          {isMobile ? (
            <>
              <Column><Link href="/portfolio/still-life"><a><StillLifeImage src="images/still-life/1.png" /><ImageTitle>{l.stillLife}</ImageTitle></a></Link></Column>
              <Column><Link href="/portfolio/portrait"><a><PortraitImage src="images/portraits/1.png" /><ImageTitle>{l.portrait}</ImageTitle></a></Link></Column>
            </>
          ) : (<Row>
            {/* <Column xs={1} /> */}
            <Column><Link href="/portfolio/still-life"><a><StillLifeImage src="images/still-life/1.png" /><ImageTitle>{l.stillLife}</ImageTitle></a></Link></Column>
            <Column><Link href="/portfolio/portrait"><a><PortraitImage src="images/portraits/1.png" /><ImageTitle>{l.portrait}</ImageTitle></a></Link></Column>
            {/* <Column xs={1} /> */}
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid>
          {isMobile ? (<Col>
            <Link href="/portfolio/landscape">
              <a>
                <BoxShadowImage src="images/landscape/2.png" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
                <ImageTitle>{l.landscape}</ImageTitle>
              </a>
            </Link>
          </Col>) : (<Row>
            <Col>
              <Link href="/portfolio/landscape">
                <a>
                  <BoxShadowImage src="images/landscape/2.png" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
                  <ImageTitle>{l.landscape}</ImageTitle>
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
              <ImageTitle>{l.aboutMe}</ImageTitle>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'black', margin: 'auto' }} />
              <div css={css`padding: 24px;`}>
                <p style={{ marginTop: '16px' }}>{l.about1}</p>
                <p>{l.about2}</p>
                <p>{l.about3}</p>
              </div>
            </AboutBox>
          </Column>
        </HomepageContainer>
        <HomepageContainer fluid style={{ backgroundColor: 'rgba(193, 195, 201, 0.3)', padding: '16px' }}>
          <Col style={{ position: 'relative' }}>
            <ImageTitle>{l.contact}</ImageTitle>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'black', margin: 'auto', marginBottom: '48px' }} />
            <Row css={css`justify-content: center; margin-bottom: 16px; font-size: 18px; `}><span>Marts</span></Row>
            <Row css={css`justify-content: center; margin-bottom: 48px;`}><div css={css`height: 32px; width: 32px;`}><Envelope /></div><a href="mailto:***@gmail.com" css={css`margin-left: 16px;`}>***@gmail.com</a></Row>
          </Col>
        </HomepageContainer>
      </Content>
      <GlobalStyles />
    </>
  )
}

export default Home
