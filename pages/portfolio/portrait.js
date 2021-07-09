
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
      img: '/images/portraits/1.png',
      title: 'foo',
      cols: 1,
      type: 'img',
    },
    {
      img: null,
      title: 'Portrait',
      subtitle: '',
      cols: 1,
      type: 'text',
    },
  {
    img: '/images/portraits/2.png',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  {
    img: '/images/portraits/3.png',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  {
    img: '/images/portraits/4.png',
    title: 'foo',
    cols: 1,
    type: 'img',
  }
  ]

  export default function Portrait() {
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
      <Column key={tile.title} xs={12} md={6}>
        {tile.type === 'img' ? (<PortfolioImg src={tile.img} />): (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'Column',height: '100%'}}>
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