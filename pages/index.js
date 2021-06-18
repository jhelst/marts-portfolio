import * as React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'

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
  padding: 0 32px;
  & .bg {
    position: fixed;
    left: 0;
    padding: 24px;
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
  padding: 4px;
  color: #323232;
  text-shadow: 1px 1px 1px #393939ad;
  text-decoration: none;
  transition: color 250ms linear;
  &:hover {
    color: #767676;
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
    if(window){
      window.addEventListener('scroll', handleScroll)
    }


    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <Nav className={scrollDirection}>
      <div style={{position: 'relative'}}>
        <div className="bg"/>
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
      </div>
    </Nav>
  )
}

const Content = styled('div')`
margin-left: -15px;
margin-right: -15px;
`

const HeroImage = styled('img')`
width: 100%;
height: 100%;
`

const StillLifeImage = styled('img')`
height: 100%;
width: 100%;
`

const PortraitImage = styled('img')`
height: 100%;
width: 100%;
`

const FlexImage = styled(Image)`
display: flex;
`

const HomepageContainer = styled(Container)`
margin-top: 48px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/> 
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"></script>
        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
      </Head>
      <Navigation/>
      <Content>
      <Container fluid>
        <HeroImage src="images/1.jpeg"/>
      </Container>
      <HomepageContainer fluid>
      <Row>
        <Col xs={1}/>
        <Col><StillLifeImage src="images/violin1.jpg"/><h2>Still Life</h2></Col>
        <Col><PortraitImage src="images/portrait1.jpeg"/><h2>Portrait</h2></Col>
        <Col xs={1}/>
      </Row>
      </HomepageContainer>
      <HomepageContainer fluid>
      <Row>
        <Col xs={1}/>
        <Col xs={10}>
          <Image src="images/snow.jpeg"/>
          <h2>Landscape</h2>
        </Col> 
        <Col xs={1}/>
      </Row>
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
        }
      `}</style>
    </>
  )
}
