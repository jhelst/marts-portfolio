
import * as React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
 
import { PortfolioTitle } from '../../components/copy';
import { GlobalStyles } from '../../components/global-styles';
import { Column, PortfolioImg } from '../../components/components';
import { LanguageContext } from '../../context/language-context';

const gallery = [
    {
      img: '/images/landscape/1.png',
      title: 'foo',
      cols: 1,
      type: 'img',
    },
    {
      img: null,
      title: 'landscape',
      subtitle: '',
      cols: 1,
      type: 'text',
    },
  {
    img: '/images/landscape/2.png',
    title: 'foo',
    cols: 1,
    type: 'img',
  },
  ]

  export default function Landscape() {
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
          <Column key={tile.title} xs={12}>
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