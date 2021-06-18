
import * as React from 'react'

import { GridList, GridListTile, Paper, Container, Box, useMediaQuery, GridListTileBar } from '@material-ui/core';
import { useStyles } from '../util/styles';


const gallery = [
    {
      img: '/images/flower1.jpeg',
      title: 'foo',
      cols: 1,
      type: 'img',
    },
    {
      img: null,
      title: 'Martina',
      subtitle: 'Portfolio',
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
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 767px)')
    return (
    <GridList cellHeight={isMobile ? 200 : 400} cols={isMobile ? 1 : 3}>
    {gallery.map((tile) => (
      <GridListTile key={tile.title} cols={tile.cols || 1} className={classes.gridTile}>
        {tile.type === 'img' ? (<img src={tile.img} className={classes.imageFit}/>): (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',height: '100%'}}>
          <h1>{tile.title}</h1>
          <p>{tile.subtitle}</p>
        </div>)}
      </GridListTile>
    ))}
  </GridList>
    )
}