import * as React from 'react'
import Head from 'next/head'

import styled from 'styled-components'


const mq = {
  'mobileMax': '(max-width: 414px)',
  'tabletMin': '(min-width: 415px)',
  'tabletMax': '(max-width: 1024px)',
  'desktopMin': '(min-width: 1025px)',
}

const TopBlock = styled.main`
width: 100%;
height: 60vh;
background-color: #ccc;
display: flex;
align-items: center;
justify-content: center;
`

const Content = styled.div`
position: relative;
display: flex;
flex: 1 1 auto;
flex-direction: column;
box-sizing: border-box;
width: 100%;
background-color: #f0f0f0;
padding: 0 12px;
@media ${mq.tabletMin} {
  padding: 0 16px;
}
@media ${mq.desktopMin} {
  padding: 0 24px;
}
`

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: ${({row}) => row ? 'row' : 'column' };
    flex-wrap: wrap;
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    ${({justifyContent}) => justifyContent ? `justify-content: ${justifyContent}` :''};
    ${({alignItems}) => alignItems ? `align-items: ${alignItems}`: ''};
    ${({gutters}) => gutters ? `& > div:not(:last-child){
      margin-right: 16px;
    }
    & > div:not(:last-child){
     margin-right: 16px;
    }` : ''
  };
`

const AboutContainer = styled(Container)`
flex-direction: column;
@media ${mq.desktopMin}{
  flex-direction: row;
}
`

const Hero = styled(Container)`
  position: relative;
  box-shadow: 0 10px 16px #a4a4a421;
  background-image: url('/images/1.jpeg'); 
  background-size: cover;
  background-position: center;
`
const FlexItem = styled.div`
    position: relative;
    display: flex;
    flex: ${({flex}) => flex || 1};
    height: 100%;
`

const MobileHiddenFlexItem = styled(FlexItem)`
  display: none;
  @media ${mq.desktopMin} {
    display: flex;
  }
`

const TitleRow = styled(Container)`
flex: 2;
background-color: white;
`

const Img = styled.div`
background-image: url('/images/1.jpeg'); 
background-size: cover;
background-position: center;
height: 100%; 
width: 100%;
padding-top: 100%;
`

const LeftImg = styled.img`
width: 100%;
`

const HeroImg = styled.img`
 position: absoulte;
 top: 0;
 left: 0;
 bottom: 0;
`

const Title = styled.h1`
color: #323232;
text-shadow: 5px 2px 3px #3939392e;
position: absolute;
top: 24px;
padding: 0 32px;
font-size: 32px;
margin: 0;
right: 48px;
@media ${mq.tabletMin} {
  font-size: 42px;
  padding: 0 40px;
  top: 32px;
  right: 0;
}
@media ${mq.desktopMin} {
  font-size: 48px;
  padding: 0 32px;
  top: 16px;
  right: 0;
}`

const SectionHeading = styled.h2`
 margin: 0 0 -18px 0;
 color: #3939398f;
 font-size: 60px;
 @media ${mq.tabletMin} {
   font-size: 80px
   margin: 0 0 -24px 0;
 }
 @media ${mq.desktopMin} {
  font-size: 100px;
  margin: 0 0 -30px 0;
 }
`

const ImageRowContainer = styled(Container)`
margin-bottom: 24px;
flex-direction: column;
justify-content: center;
align-items: center;
& > div {
  margin: 0 !important;
  margin-bottom: 24px !important;
  width: 100%;
  padding: 0;
}
@media ${mq.desktopMin} {
  margin-bottom: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > div {
    margin: 0 !important;
    margin-right: 24px !important;
    width: 100%;
    padding: 0 5%;
  }
 }
`

const ImageRowCard = styled(FlexItem)`
`
const FloaterDiv = styled.div`
height: 400px;
width: 200px;
background-color: #57240c;
position: absolute;
right: -100px;
display: flex;
justify-content: flex-end;
z-index: 1;
`

const CardTitle = styled.h3`
 text-align: right;
 color: #111;
 transition: color 250ms linear;
 cursor: pointer;
 &:hover { 
  color: #767676;
 }
`


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

export default function Home() {
  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/> 
      </Head>
      <Navigation/>
      <Hero id="top" row justifyContent="center" alignItems="center" height="66vh">
        <Title>Marts</Title>
      </Hero>
      <Content>
      <AboutContainer row style={{marginTop: '80px'}}>
        <FlexItem id="about">
          <Container style={{textAlign: 'right', marginRight: '13%', marginLeft: '10%'}}>
            <Container col style={{justifySelf: 'flex-end'}}>
            <SectionHeading>About</SectionHeading>
            <p style={{ display: 'block', marginTop: '48px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit pellentesque habitant. </p>
            <p>Pharetra massa massa ultricies mi quis hendrerit dolor magna. Pharetra diam sit amet nisl.</p>
            </Container>
          </Container>
        </FlexItem>
        <FlexItem style={{height: '100%', width: '100%',backgroundImage: "url('/images/marts.jpeg')", backgroundPosition: 'center'}} >
        </FlexItem>
      </AboutContainer>
      <Container id="portfolio" row style={{marginTop: '80px'}} alignItems="center" justifyContent="center">
        <SectionHeading>Portfolio</SectionHeading>
      </Container>
      <ImageRowContainer gutters style={{marginTop: '56px', marginBottom: '56px'}}>
        <ImageRowCard>
          <Container col>
            <LeftImg src="/images/1.jpeg"/>
            <CardTitle>Section</CardTitle>
          </Container>
        </ImageRowCard>
        <ImageRowCard>
          <Container col>
            <LeftImg src="/images/portrait1.jpeg"/>
            <CardTitle>Portrait</CardTitle>
          </Container>
        </ImageRowCard>
      </ImageRowContainer>
      <ImageRowContainer gutters>
        <ImageRowCard>
          <Container col>
            <LeftImg src="/images/chairs.jpeg"/>
            <CardTitle>Still Life</CardTitle>
          </Container>
        </ImageRowCard>
        <ImageRowCard>
          <Container col>
            <LeftImg src="/images/snow.jpeg"/>
            <CardTitle>Landscape</CardTitle>
          </Container>
        </ImageRowCard>
      </ImageRowContainer>
      <Container id="portfolio" row style={{marginTop: '80px'}} alignItems="center" justifyContent="center">
        <SectionHeading>Contact</SectionHeading>
      </Container>
      <Container id="contact" row justifyContent="flex-end" style={{marginTop: '56px', marginBottom: '56px'}}>
      <Container style={{flex: '0.4'}}>
          <p style={{textAlign: 'right', width: '90%'}}>Lorem</p>
          <p style={{textAlign: 'right', width: '90%'}}>Ipsum</p>
        </Container>
        <FlexItem flex="0.6">
          <LeftImg src="/images/violins.png" />
        </FlexItem>
      </Container>

      <style jsx global>{`
        html,
        body {
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
    </Content>
    </>
  )
}
