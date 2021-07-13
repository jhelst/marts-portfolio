import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    width: 395px;
    max-width: 100%;
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
  }
  & li {
    display: flex;
    padding: 8px 0;
  }
  & a {
  text-shadow: 1px 1px 1px #393939ad;
  text-decoration: none;
  transition: all 250ms linear;
  &:hover {
    color: #434343 !important;
  }
  }
 `


export const Navigation = ({meta}) => {

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
            <a href="/#top">{meta.home}</a>
          </li>
          <li>
            <a href="/#portfolio">{meta.portfolio}</a>
          </li>
          <li>
            <a href="/#about">{meta.about}</a>
          </li>
          <li>
            <a href="/#contact">{meta.contact}</a>
          </li>
        </ul>
      </Container>
    </Nav>
  )
}