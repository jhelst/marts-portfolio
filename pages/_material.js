import * as React from 'react'
import Head from 'next/head'

import styled from 'styled-components'
import { GridList, GridListTile, Paper, Container, Box, useMediaQuery, GridListTileBar } from '@material-ui/core';
import { useStyles } from '../util/styles';

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

export default function Home() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <>
      <Head>
        <title>Marts Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/> 
      </Head>
      <Navigation/>
      {/* <Container className={classes.hero}>
        <h1>Martina - Photographer</h1>
        <p>Focus on life</p>
      </Container> */}
      <div className={classes.root}>
      <GridList cellHeight={isMobile ? 400 : 800} cols={1} style={{marginBottom: isMobile ? '40px' : '80px'}}>
          <GridListTile key="hero" cols={1} className={classes.gridTile}>
            <img src="/images/1.jpeg" className={classes.imageFit}/>
          </GridListTile>
      </GridList>
      <GridList cellHeight={isMobile ? 200 : 400} cols={isMobile ? 1 : 2} spacing={isMobile ? 16 : 64} style={{padding: isMobile ? '0 16px' : '0 48px', marginBottom: isMobile ? '40px' : '80px'}}>
          <GridListTile key="still-life" cols={1} rows={1.5} className={classes.gridTile} style={{marginBottom: isMobile ? '32px' : '80px'}}>
            <img src="/images/violin1.jpg" className={classes.imageFit}/>
            <GridListTileBar title="Still Life" style={{ backgroundColor: 'rgba(43, 43, 43, 0.5)', fontSize: '16px', fontFamily: 'Limelight'}}/>
          </GridListTile>
          <GridListTile key="portrait" cols={1} rows={2} className={classes.gridTile}>
            <img src="/images/portrait1.jpeg" className={classes.imageFit}/>
            <GridListTileBar title="Portrait" style={{ backgroundColor: 'rgba(43, 43, 43, 0.5)', fontSize: '16px', fontFamily: 'Limelight'}}/>
          </GridListTile>
      </GridList>
      <GridList cellHeight={isMobile ? 300 : 700} cols={1} style={{marginBottom: isMobile ? '40px' : '80px'}}>
          <GridListTile key="landscape" cols={1} className={classes.gridTile}>
            <img src="/images/snow.jpeg" className={classes.imageFit}/>
            <GridListTileBar title="Landscape" style={{ backgroundColor: 'rgba(43, 43, 43, 0.5)', fontSize: '16px', fontFamily: 'Limelight'}}/>
          </GridListTile>
      </GridList>
      <GridList cellHeight={isMobile ? 300 : 700} cols={2} style={{padding: isMobile ? '0 16px' : '0 48px', marginBottom: isMobile ? '40px' : '80px'}}>
          <GridListTile key="landscape" cols={1} className={classes.gridTile}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',height: '100%'}}>
              <h1>About Martina</h1>
              <p>fun words!</p>
            </div>
          </GridListTile>
          <GridListTile key="landscape" cols={1} className={classes.gridTile}>
            <img src="/images/marts.jpeg" className={classes.imageFit}/>
          </GridListTile>
      </GridList>
      </div>
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
