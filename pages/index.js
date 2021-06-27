import * as React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Box, useMediaQuery } from '@material-ui/core'
const mq = {
  'mobileMax': '(max-width: 414px)',
  'tabletMin': '(min-width: 415px)',
  'tabletMax': '(max-width: 1024px)',
  'desktopMin': '(min-width: 1025px)',
}


const Nav = styled.nav`
  position: fixed;
  display: flex;
  z-index: 1;
  background-color: transparent;
  width: 100vw;
  left: 0;
  top: 24px;
  & .bg {
    position: fixed;
    left: 0;
    padding: 20px;
    width: 370px;
    height: inherit;
    z-index: -1;
    opacity: 0;
    background-color: #d6d6d6cc;
  }
  &.down .bg, &.up .bg {
    opacity: 1;
  }
  &.down ul, &.up ul {
    flex-direction: row;
    & li {
      padding-right: 12px;
    }
  }
  &.top ul {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    color: #fff;
  }
  @media ${mq.tabletMin} {
  padding: 0 40px;
  top: 32px;
  }
  @media ${mq.desktopMin} {
  padding: 0 56px;
  top: 40px;
  }
  & ul { 
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100px;
  }
  & li {
    display: flex;
    padding: 8px 0;
  }
  & a {
  color: #fff;
  text-shadow: 1px 1px 1px #393939ad;
  text-decoration: none;
  transition: color 250ms linear;
  &:hover {
    color: #767676;
  }
   & a.down {
     color: #323232;
   }
  }
 `

const Navigation = () => {

  const [scrollDirection, setScrollDirection] = React.useState('top')

  React.useEffect(() => {
    let prevScrollY = 0
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setScrollDirection('down')
      } else if (window.scrollY < prevScrollY) {
        setScrollDirection('up')
      } if (window.scrollY === 0) {
        setScrollDirection('top')
      }
      prevScrollY = window.scrollY
    }
    if (window) {
      window.addEventListener('scroll', handleScroll)
    }


    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <Nav className={scrollDirection}>
      <Container fluid style={{ position: 'relative' }}>
        <div className="bg" />
        <ul>
          <li>
            <a href="/#top">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#portfolio">Gallery</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </Container>
    </Nav>
  )
}

const Content = styled('div')`
  margin-right: -15px;
  margin-left: -15px;
`


const boxShadowStyle = css`
cursor: pointer;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
&::hover {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
}
`

const HeroImage = styled('img')`
${boxShadowStyle};
width: 100%;
height: 100%;
`

const StillLifeImage = styled('img')`
${boxShadowStyle};
height: 100%;
width: 100%;
`


const PortraitImage = styled('img')`
${boxShadowStyle};
height: 100%;
width: 100%;
margin-top: 16px;
@media (min-width: 1024px){
  margin-top: 0;
}
`

const BoxShadowImage = styled(Image)`
${boxShadowStyle};
`

const HomepageContainer = styled(Container)`
box-sizing: border-box;
margin-top: 24px;
@media (min-width: 1024px){
  margin-top: 48px;
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
        <Container fluid>
          <HeroImage src="images/1.jpeg" />
        </Container>
        <HomepageContainer fluid>
          {isMobile ? (
            <>
              <Col><StillLifeImage src="images/violin1.jpg" /><ImageTitle>Still Life</ImageTitle></Col>
              <Col><PortraitImage src="images/portrait1.jpeg" /><ImageTitle>Portrait</ImageTitle></Col>
            </>
          ) : (<Row>
            <Col xs={1} />
            <Col><StillLifeImage src="images/violin1.jpg" /><ImageTitle>Still Life</ImageTitle></Col>
            <Col><PortraitImage src="images/portrait1.jpeg" /><ImageTitle>Portrait</ImageTitle></Col>
            <Col xs={1} />
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid>
          {isMobile ? (<Col>
            <BoxShadowImage src="images/snow.jpeg" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
            <ImageTitle>Landscape</ImageTitle>
          </Col>) : (<Row>
            <Col>
              <BoxShadowImage src="images/snow.jpeg" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
              <ImageTitle>Landscape</ImageTitle>
            </Col>
          </Row>)}
        </HomepageContainer>
        <HomepageContainer fluid>
          <Col style={{ position: 'relative', marginBottom: '142px' }}>
            <BoxShadowImage src="images/marts.jpeg" style={{ display: 'flex', margin: 'auto', maxWidth: '100%' }} />
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
      <style jsx global>{`
        html,
        body {
          background-color: #f4f4f4;
          padding: 0;
          margin: 0;
          font-family: 'Limelight', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            width: 100%;
            height: 100%;
        }
        #__next {
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
          letterSpacing: -0.1px;
        }
      `}</style>
    </>
  )
}
