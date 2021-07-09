
import * as React from 'react'
import { css} from 'styled-components'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
 
import { Column, PortfolioImg } from '../../components/components';
import { Navigation } from '../../components/navigation';
import { PortfolioTitle } from '../../components/copy';
import { GlobalStyles } from '../../components/global-styles';
import { useMediaQuery } from '../../hooks/use-media-query';
const gallery = [
    {
      img: '/images/flower1.jpeg',
      title: 'foo',
      cols: 1,
      type: 'img',
    },
    {
      img: null,
      title: 'Portfolio',
      subtitle: '',
      cols: 1,
      type: 'text',
    },
  {
    img: '/images/city.jpeg',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  {
    img: '/images/flower2.jpeg',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  {
    img: '/images/snow.jpeg',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  {
    img: '/images/violin1.jpg',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  ]

  export default function Portfolio() {
    const isMobile = useMediaQuery('(max-width: 767px)')
    return (
      <>
          <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet" />
    </Head>
            <Navigation />
    <Container fluid>
      <Row noGutters>
    {gallery.map((tile) => (
      <Column key={tile.title} xs={6} md={4}>
        {tile.type === 'img' ? (<PortfolioImg src={tile.img} />): (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',height: '100%'}}>
        <PortfolioTitle>{tile.title}</PortfolioTitle>
        </div>)}
      </Column>
    ))}
    </Row>
  </Container>
  <GlobalStyles/>
  </>
    )
}