import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Box, useMediaQuery } from '@material-ui/core'
import { Navigation } from '../components/navigation';
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
height: 100%;
width: 100%;
`


const PortraitImage = styled('img')`
${boxShadowStyle};
${imgHoverStyles};
height: 100%;
width: 100%;
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
margin-top: 6px;
font-size: 16px;

@media (min-width: 1024px){
  font-size: 24px;
}
`

const AboutBox = styled('div')`
position: absolute;
top: 70%; background-color: white; 
width: 80%;
left: 10%;
padding: 8px;
border-radius: 4px;
box-shadow: 2px 2px 5px #0000001a;
`

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet" />
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
        <Container fluid css={css`padding: 0`}>
          <HeroImage src="images/1.jpeg" />
        </Container>
        <HomepageContainer fluid id="portfolio">
          {isMobile ? (
            <>
              <Col><Link href="/portfolio/still-life"><a><StillLifeImage src="images/violin1.jpg" /><ImageTitle>Still Life</ImageTitle></a></Link></Col>
              <Col><Link href="/portfolio/portrait"><a><PortraitImage src="images/portrait1.jpeg" /><ImageTitle>Portrait</ImageTitle></a></Link></Col>
            </>
          ) : (<Row>
            {/* <Col xs={1} /> */}
            <Col><Link href="/portfolio/still-life"><a><StillLifeImage src="images/violin1.jpg" /><ImageTitle>Still Life</ImageTitle></a></Link></Col>
            <Col><Link href="/portfolio/portrait"><a><PortraitImage src="images/portrait1.jpeg" /><ImageTitle>Portrait</ImageTitle></a></Link></Col>
            {/* <Col xs={1} /> */}
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid>
          {isMobile ? (<Col>
            <Link href="/portfolio/landscape">
              <a>
            <BoxShadowImage src="images/snow.jpeg" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
            <ImageTitle>Landscape</ImageTitle>
            </a>
            </Link>
          </Col>) : (<Row>
            <Col>
            <Link href="/portfolio/landscape">
              <a>
                <BoxShadowImage src="images/snow.jpeg" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
                <ImageTitle>Landscape</ImageTitle>
              </a>
              </Link>
            </Col>
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid id="about">
          <Col css={css`
            position: relative;
            margin-bottom: 142px;
            @media (min-width: 1024px){
              max-height: 800px;
            }
          `}>
            <BoxShadowImage src="images/marts.jpeg"
            css={css`
              display: flex;
              margin: auto;
              max-width: 100%;
              @media (min-width: 1024px){
                max-height: 800px;
              }
            `} />
            <AboutBox>
              <ImageTitle>About</ImageTitle>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'black', margin: 'auto' }} />
              <p style={{marginTop: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </AboutBox>
          </Col>
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
