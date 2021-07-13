
import * as React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
 
import { Column, PortfolioImg } from '../../components/components';
import { PortfolioTitle } from '../../components/copy';
import { GlobalStyles } from '../../components/global-styles';
import { LanguageContext } from '../../context/language-context';
const gallery = [
    {
      img: '/images/flower1.jpeg',
      title: 'foo',
      cols: 1,
      type: 'img',
    },
    {
      img: null,
      title: 'portfolio',
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
    const {translations: l} = React.useContext(LanguageContext)
    return (
      <>
          <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet" />
    </Head>
    <Container fluid>
      <Row noGutters>
    {gallery.map((tile) => (
      <Column key={tile.title} xs={6} md={4}>
        {tile.type === 'img' ? (<PortfolioImg src={tile.img} />): (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',height: '100%'}}>
        <PortfolioTitle>{l[tile.title]}</PortfolioTitle>
        </div>)}
      </Column>
    ))}
    </Row>
  </Container>
  <GlobalStyles/>
  </>
    )
}